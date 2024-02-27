
function CheckOut() {
    return (
        <>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="order-item">
                    <span className="item-label">Sub Total</span>
                    <span className="item-value">$ 130</span>
                </div>
                <div className="order-item">
                    <span className="item-label">Discount</span>
                    <span className="item-value">$ 40</span>
                </div>
                <div className="order-item">
                    <span className="item-label">Coupon Discount</span>
                    <span className="item-value">$ 10</span>
                </div>
                <div className="order-item">
                    <span className="item-label">Tax</span>
                    <span className="item-value">$ 2</span>
                </div>
                <div className="order-item">
                    <span className="item-label">Shipping Cost</span>
                    <span className="item-value">Free</span>
                </div>
                <div className="order-total">
                    <span className="total-label">Grand Total</span>
                    <span className="total-value">$ 388</span>
                </div>
            <div className="col-12 d-flex shopping-box"><a href="checkout.html" className="ml-auto btn hvr-hover">Checkout</a> </div>
            </div>
        </>
    )
}

export default CheckOut