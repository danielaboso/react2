import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { dataBase } from '../../services/Firebase'
import { useNavigate } from "react-router-dom"
import  ClientForm  from '../Form/Form'
import { Ring } from '@uiball/loaders'
import Swal from "sweetalert2";
import'./Checkout.css'


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [personalData, setPersonalData] = useState(false)
    
            const [datosCompra, setDatosCompra] = useState({}) 

    const completoDatos = (name, surname, address, phone, email) =>{
            setDatosCompra({name, surname, address, phone, email})
            setPersonalData(true)
        }
    

    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()
    
    const createOrder = async () => {
        setLoading(true)  

        try {
            const objOrder = {
                buyer:datosCompra,
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(dataBase)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(dataBase, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dataBase, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)
                Swal.fire({
                    title: "Muchras Gracias!",
                    text:`Su orde es: ${orderAdded.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                
                })
            } else {
                Swal.fire({
                    title: "Oops, no hay stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                
                })
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <div className="conteinerCheckout">
            <h1>Pocesando...</h1>
            <br></br>
            <div className="Ring">{ Ring } </div>
        </div>
    }

    return (    
        <div>
            <h1 className="datosCliente">Completa los datos para realizar tu orden</h1>
            <ClientForm completoDatos={completoDatos}/>
            { personalData 
            ?<button className="botonCheckout" onClick={createOrder}>Confirmar Pedido</button> 
            : ""}
        </div>
    )
}

export default Checkout