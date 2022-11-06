import './CartWidget.css'
import { BiShoppingBag } from 'react-icons/bi'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext) 

    return(
        <div className="widget">
          <div className="CartWidget"> 
            <Link className='Carrito' to='/cart'>  <img id="BiShoppingBag" src={BiShoppingBag} alt="" /></Link>
            <span className='number' id='number'>{totalQuantity}</span>
          </div>
        </div>
    );
}

export default CartWidget