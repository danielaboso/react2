import {Link} from 'react-router-dom'
import '../Item/Item.css'

const Item = ({ id, img, name, category, price, stock }) => {
    return (
      <div className='containerCard'>
        <div className='card' key={id}>
          <div className='imagen'>
            <img src={img} alt="" />
          </div>
          <div className="details">
            <h3>{name}</h3>
            <h5>{category}</h5>
            <h5>{stock}</h5>
            <p>${price}</p>
          </div>
          <Link to = {`/detail/${id}`}>Ver detalle</Link>
        </div>
      </div>
    )
  
  }
  
  export default Item