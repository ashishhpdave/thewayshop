import { NavLink } from "react-router-dom"

function AboutHero(item) {
    const {title} = item
    return (
        <>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>{title}</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
                                <li className="breadcrumb-item active">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero