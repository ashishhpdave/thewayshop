import { NavLink } from "react-router-dom"

function MainBlog(data) {
    return (
        <>
            <div className="blog-box">
                <div className="blog-img">
                    <img className="BlogImage" src={data.img} alt="" />
                </div>
                <div className="blog-content">
                    <div className="title-blog">
                        <h3>{data.h3}</h3>
                        <p>{data.p}</p>
                    </div>
                    <ul className="option-blog">
                        <li><NavLink href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart"></i></NavLink></li>
                        <li><NavLink href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye"></i></NavLink></li>
                        <li><NavLink href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments"></i></NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainBlog