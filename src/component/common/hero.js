import { NavLink } from "react-router-dom"

function HeroSecion(){
    return(
        <>
         <div id="slides-shop" className="cover-slides">
        <ul className="slides-container">
            <li className="text-left">
                <img className="heroImage" src="images/banner-01.jpg" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="heroText">
                            <h1 className="m-b-20"><strong>Welcome To <br/> Thewayshop</strong></h1>
                            <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p><NavLink className="btn hvr-hover" href="#">Shop New</NavLink></p>
                        </div>
                    </div>
                </div>
            </li>
          
        </ul>
       
    </div>

        </>
    )
}

export default HeroSecion