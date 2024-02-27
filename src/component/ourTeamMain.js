import { NavLink } from "react-router-dom"

function OurTeamMain(data) {
    return (
        <>
            <div className="hover-team">
                <div className="our-team"> <img src={data.img} alt="" />
                    <div className="team-content">
                        <h3 className="title">{data.h3}</h3> <span className="post">{data.span}</span> </div>
                    <ul className="social">
                        <li>
                            <NavLink href="#" className="fab fa-facebook"></NavLink>
                        </li>
                        <li>
                            <NavLink href="#" className="fab fa-twitter"></NavLink>
                        </li>
                        <li>
                            <NavLink href="#" className="fab fa-google-plus"></NavLink>
                        </li>
                        <li>
                            <NavLink href="#" className="fab fa-youtube"></NavLink>
                        </li>
                    </ul>
                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                    <p>{data.p}</p>
                </div>
                <hr className="my-0" />
            </div>
        </>
    )
}

export default OurTeamMain