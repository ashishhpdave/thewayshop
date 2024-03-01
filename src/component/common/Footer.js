import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <>
                 <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="footerRow">
                        <div className="mainFooter">
                            <div className="footer-widget">
                                <h4>About ThewayShop</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul>
                                    <li><NavLink href="#"><i className="fab fa-facebook" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-twitter" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fa fa-rss" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mainFooter">
                            <div className="footer-link">
                                <h4>Information</h4>
                                <ul>
                                    <li><NavLink href="#">About Us</NavLink></li>
                                    <li><NavLink href="#">Customer Service</NavLink></li>
                                    <li><NavLink href="#">Our Sitemap</NavLink></li>
                                    <li><NavLink href="#">Terms &amp; Conditions</NavLink></li>
                                    <li><NavLink href="#">Privacy Policy</NavLink></li>
                                    <li><NavLink href="#">Delivery Information</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mainFooter">
                            <div className="footer-link-contact">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br />India Rajasthan "jalor",<br /></p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-phone-square"></i>Phone: <NavLink href="tel:+1-888705770">+1-888 705 770</NavLink></p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope"></i>Email: <NavLink href="mailto:contactinfo@gmail.com">youreamil@gmail.com</NavLink></p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope"></i>All  Reserved. © 2024 ThewayShop Design By : <NavLink href="https://github.com/ashishhpdave">ashishhpdave</NavLink></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer