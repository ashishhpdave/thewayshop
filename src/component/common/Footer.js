import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo"><img src="images/logo.png" className="logo" alt=""/></h1>

                    <h2>Contact</h2>

                    <address>
                        5534 Somewhere In. The World 22193-10212<br/>

                            <NavLink className="footer__btn" href="mailto:example@gmail.com">Email Us</NavLink>
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Media</h2>

                        <ul className="nav__ul">
                            <li>
                                <NavLink href="#">Online</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Print</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Alternative Ads</NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Technology</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <NavLink href="#">Hardware Design</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Software Design</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Digital Signage</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Automation</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Artificial Intelligence</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">IoT</NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <NavLink href="#">Privacy Policy</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Terms of Use</NavLink>
                            </li>

                            <li>
                                <NavLink href="#">Sitemap</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2024 Something. All rights reserved.</p>

                    <div className="legal__links">
                        <span>Made with <NavLink className="heart" to="https://github.com/ashishhpdave/">ashishhpdave</NavLink> remotely from Anywhere</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer