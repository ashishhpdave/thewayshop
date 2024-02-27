import Footer from "../../../component/common/Footer"
import AboutHero from "../../../component/common/abouthero"
import CategoriesShop from "../../../component/common/categories"
import FeatureProduct from "../../../component/common/featureProduct"
import Header from "../../../component/common/header"
import InstagramBox from "../../../component/common/instagramBox"
import TopMain from "../../../component/common/topMian"

function ProductPage(){
    return(
        <>
            <TopMain />
            <header>
                <Header page="product"/>
            </header>
            <AboutHero title="Product"/>
            <CategoriesShop /> 
        <FeatureProduct />
        <InstagramBox />
        <Footer />
        </>
    )
}
export default ProductPage