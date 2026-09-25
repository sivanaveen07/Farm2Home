import  './Footer.css';
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Farm2Home</h3>
                    <p>From Farm to Home, Directly.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/farmers">Farmers</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>For Farmers</h3>

                    <ul className="footer-links">
                        <li><Link to="/seller">Become a Seller</Link></li>
                        <li><Link to="/fpo-registration">FPO Registration</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>

                    <ul className="footer-links">
                        <li>
                            <a href="mailto:sivanaveenbommidi@gmail.com">
                                Email Us
                            </a>
                        </li>

                        <li>
                            <a href="tel:7207085371">
                                +91 72070 85371
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Farm2Home. All rights reserved.</p>
            </div>

</footer>
    )
}
export default Footer;