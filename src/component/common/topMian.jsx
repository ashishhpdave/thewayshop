import { NavLink } from "react-router-dom"

function TopMain(){
    return(
        <>
             <div className="main-top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="text-slid-box">
                        <div id="offer-box" className="carouselTicker">
                            <ul className="offer-box">
                                <li>
                                    <i className="fab fa-opencart"></i> Off 10%! Shop Now Man
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                 
                    <div className="right-phone-box">
                        <p>Call US :- <NavLink href="#"> +11 900 800 100</NavLink></p>
                    </div>
                    <div className="our-link">
                        <ul>
                            <li><NavLink href="#">My Account</NavLink></li>
                            <li><NavLink href="#">Our location</NavLink></li>
                            <li><NavLink href="#">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default TopMain