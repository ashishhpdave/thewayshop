import { NavLink } from "react-router-dom"

function InstagramMain(data) {
    return (
        <>
            <div className="InstagramItem">
                <div className="ins-inner-box">
                    <img src={data.img} className="instaGramImages" alt="" />
                    <div className="hov-in">
                        <NavLink href="#"><i className="fab fa-instagram"></i></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstagramMain