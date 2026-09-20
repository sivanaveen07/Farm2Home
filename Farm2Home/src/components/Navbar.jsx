import "./Navbar.css";
function Navbar(){
    return(
        
            <nav className="navbar">
                <div className="brand"><a href="/">Farm2Home</a></div>
                <ul className="navigation-links">
                    <li>
                        <a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/farmer">Farmers</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="navbar-actions">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
    )
}
export default Navbar


