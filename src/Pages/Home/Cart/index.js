import CartMain from "../../../component/cartMain"
import AboutHero from "../../../component/common/abouthero"
import Header from "../../../component/common/header"
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
        </>
    )
}

export default CartPage