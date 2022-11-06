import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Ring } from '@uiball/loaders'
import { getProduct } from '../../services/Firestore/Porducts'
import { useAsync } from "../../Hooks/useAsync";


const ItemDetailContainer =() => {

        const {productId} = useParams()
    
        const getProductsFromFirestore = () => getProduct(productId)
    
        const { data: products, error, loading } = useAsync(getProductsFromFirestore, [productId])
    

    if(loading) {
        return <div className='conteinerLista '>
        <div className="Ring">{ Ring } </div>

<Ring 
 size={40}
 lineWeight={5}
 speed={2} 
 color="black" 
/>
        </div>
    }

    if(error) {
        return  <h1>Oops! Algo salió mal</h1>
    }

    return  (
        <div>
            <ItemDetail key= {products.id} {... products}/>
        </div>
    )
}


export default ItemDetailContainer