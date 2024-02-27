import CartMainData from "./cartMainData"

const CartData = [
    {
        img : "images/img-pro-01.jpg",
        span : " Lorem ipsum dolor sit amet",
        p : "$ 80.6"
    },
    {
        img : "images/img-pro-02.jpg",
        span : " Lorem ipsum dolor sit amet",
        p : "$ 80.6"
    },
    {
        img : "images/img-pro-03.jpg",
        span : " Lorem ipsum dolor sit amet",
        p : "$ 80.6"
    },
]
function CartMain() {
    return (
        <>
            
                    <div className="cartMainTable">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        CartData.map(function(item){
                                            return(
                                                <CartMainData img={item.img} span={item.span} p={item.p}/>
                                            )
                                        })
                                       }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                <div className="col-lg-6 col-sm-6">
                    <div className="coupon-box">
                        <div className="input-group input-group-sm">
                            <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text"/>
                            <div className="input-group-append">
                                <button className="btn btn-theme" type="button">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="update-box">
                        <input value="Update Cart" type="submit"/>
                    </div>
                </div>
            </div>
                </>
                )
}

                export default CartMain