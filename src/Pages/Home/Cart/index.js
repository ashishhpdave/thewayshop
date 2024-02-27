import CartMain from "../../../component/cartMain"
import CheckOut from "../../../component/checkout"
import Footer from "../../../component/common/Footer"
import AboutHero from "../../../component/common/abouthero"
import Header from "../../../component/common/header"
import InstagramBox from "../../../component/common/instagramBox"
import TopMain from "../../../component/common/topMian"

function CartPage(){
    return(
        <>
            <TopMain />
            <header>
                <Header page="Cart"/>
            </header>
            <AboutHero title="Cart"/>
            <CartMain />
            <CheckOut />
            <InstagramBox />
            <Footer />
        </>
    )
}

export default CartPage