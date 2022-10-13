import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {productsId} = useParams()
      

    useEffect(() => {
        getProductsById(productsId ).then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [])

    return  (
        <div>

         <ItemDetail key= {products.id} {... products}/>
           
        </div>
    )
}

export default ItemDetailContainer 