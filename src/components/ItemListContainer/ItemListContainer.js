import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemListContainer.css'
import { Ring } from '@uiball/loaders'
import { getProducts } from '../../services/Firestore/Porducts'
import { useAsync } from '../../Hooks/useAsync'


const ItemListContainer =() => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if(loading) {
        return <div className='conteinerLista '>
        <div className="Ring">{ Ring } </div>
        </div>
        
    }

    if(error) {
        return <h1>Oops! Algo salio mal</h1>
    }

    return  (
        <div className='conteinerLista '>
            <h1>LISTADO DE PRODUCTOS</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer