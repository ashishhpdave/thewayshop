import CategoriesShop from "../../component/common/categories"
import FeatureProduct from "../../component/common/featureProduct"
import Header from "../../component/common/header"
import HeroSecion from "../../component/common/hero"
import TopMain from "../../component/common/topMian"

function HomePage(){
    return(
        <>
        <TopMain />
        <header>
            <Header page="Home"/>
        </header>
        <HeroSecion />    
        <CategoriesShop /> 
        <FeatureProduct />
        </>
    )
}

export default HomePage