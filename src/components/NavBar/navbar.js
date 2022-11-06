import '../NavBar/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from  "../NavBar/logo.jpg"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
        <Link id="item" to = './'> <img className='logo1'  src={logo} /> </Link>
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li  className='menu' >
                <Link id="item" to = '/'>
                <p id="p">INICIO</p>
                </Link>
              </li>
              <li className='menu'  >
              <Link id="item" to = '/category/Autitos'>
                <p id="p">Autitos</p>
                </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/didacticos'>
                <p id="p">Didacticos</p>
              </Link>
              </li>
            </ul>
          </div>
          <a>
            <CartWidget />
          </a>
        </div>
      </nav>
    )
    
}

export default NavBar