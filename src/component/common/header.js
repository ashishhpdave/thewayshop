import { FaShoppingBag } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function Header({page}){
    return(
        <>
           <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
            <div className="container">
                <div className="navbar-header">
                    
                <NavLink className="navbar-brand" href="index.html"><img src="images/logo.png" className="logo" alt=""/></NavLink>
                </div>

                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className={page === 'Home' ? 'nav-item active' : 'nav-item'}>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item"><NavLink className="nav-link" href="about.html">About Us</NavLink></li>
                        <li className="dropdown megamenu-fw">
                            <NavLink href="#" className="nav-link" data-toggle="dropdown">Product</NavLink>
                         
                        </li>
                        <li className="nav-item">
                            <NavLink href="#" className="nav-link" data-toggle="dropdown">SHOP</NavLink>
                        </li>
                                <li className="nav-item"><NavLink className="nav-link" href="cart.html">Cart</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" href="service.html">Our Service</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" href="contact-us.html">Contact Us</NavLink></li>
                        <li className="search"><NavLink href="#"><i className=""><IoSearchSharp /></i></NavLink></li>
                <NavLink href="#" className="close-side"><i className=""><FaShoppingBag /></i></NavLink>
                    </ul>
                </div>

                <div className="attr-nav"> 
                    <ul>
                    </ul>
                </div>
            </div>
            <div className="side">
            </div>
        </nav>
    </header>
        </>
    )
}

export default Header