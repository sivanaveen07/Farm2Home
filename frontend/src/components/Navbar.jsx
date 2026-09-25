import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        
            <nav className="navbar">
                <div className="brand"><Link to="/">Farm2Home</Link></div>
                <ul className="navigation-links">
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to ="/farmers">Farmers</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="navbar-actions">
                    <Link to="/login">Login</Link>
                    <Link to ="/register">Register</Link>
                </div>
            </nav>
    )
}
export default Navbar


