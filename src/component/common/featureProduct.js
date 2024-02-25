import { NavLink } from "react-router-dom"
import ProductMain from "../productMain"

const ProductMainData = [
    {
        p : "Sale",
        img : "images/img-pro-01.jpg",
        h4 : "Lorem ipsum dolor sit amet",
        h5 : "7.98$"
    },
    {
        p : "Sale",
        img : "images/img-pro-02.jpg",
        h4 : "Lorem ipsum dolor sit amet",
        h5 : "10.98$"
    },
    {
        p : "Sale",
        img : "images/img-pro-03.jpg",
        h4 : "Lorem ipsum dolor sit amet",
        h5 : "15.98$"
    },
    {
        p : "Sale",
        img : "images/img-pro-04.jpg",
        h4 : "Lorem ipsum dolor sit amet",
        h5 : "17.98$"
    },
]

function FeatureProduct() {
    return (
        <>
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Featured Products</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button className="active" data-filter="*">All</button>
                                    <button data-filter=".top-featured">Top featured</button>
                                    <button data-filter=".best-seller">Best seller</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row special-list">
                        <div className="col-lg-3 col-md-6 special-grid">
                            {
                                ProductMainData.map(function(item){
                                    return(
                                        <>
                                            <ProductMain p={item.p} img={item.img} h4={item.h4} h5={item.h5}/>
                                        </>
                                    )
                                })
                            }
                        </div>

                
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct