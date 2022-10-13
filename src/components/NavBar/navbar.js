import CartWidget from "../CartWidget/Cartwidget";
import Form from "../Form/Form";
import { Link } from 'react-router-dom'
import '../NavBar/Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="navbar container-fluid ">
        <div className="m-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li id="item">Inicio
              <Link to = '/'>
              </Link> 
            </li>
            <li >
            <Link to = '/category/autitos'>
              <a id="item">Autitos</a>
            </Link> 
            </li>
            <li>
             <Link to = '/category/didacticos'>
              <a id="item">Didacticos</a> 
            </Link> 
            </li>
            </ul>
          </div>
          <Form />
           <a>
          <CartWidget />
          </a> 
        </div>
      </nav>
            
    );
}

export default Navbar;
