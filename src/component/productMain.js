import { NavLink } from "react-router-dom"

function ProductMain(data) {
    return (
        <>
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="sale">{data.p}</p>
                    </div>
                    <img src={data.img} className="img-fluid" alt="" />
                    <div className="mask-icon">
                        <ul>
                            <li><NavLink href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></NavLink></li>
                            <li><NavLink href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></NavLink></li>
                            <li><NavLink href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></NavLink></li>
                        </ul>
                        <NavLink className="cart" href="#">Add to Cart</NavLink>
                    </div>
                </div>
                <div className="why-text">
                    <h4>{data.h4}</h4>
                    <h5>{data.h5}</h5>
                </div>
            </div>

        </>
    )
}

export default ProductMain