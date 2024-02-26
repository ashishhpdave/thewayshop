import LatestBlog from "../../component/common/blog"
import CategoriesShop from "../../component/common/categories"
import FeatureProduct from "../../component/common/featureProduct"
import Header from "../../component/common/header"
import HeroSecion from "../../component/common/hero"
import InstagramBox from "../../component/common/instagramBox"
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
        <LatestBlog />
        <InstagramBox />
        </>
    )
}

export default HomePage