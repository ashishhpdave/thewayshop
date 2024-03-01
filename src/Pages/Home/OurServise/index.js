import TopMain from "../../../component/common/topMian"
import Header from "../../../component/common/header"
import AboutHero from "../../../component/common/abouthero"
import AboutTrustedRow from "../../../component/common/aboutTrustedRow"
import AboutTrustedRowMain from "../../../component/aboutTrustedMain"
import OurTeam from "../../../component/common/ourTeam"
import InstagramBox from "../../../component/common/instagramBox"
import Footer from "../../../component/common/Footer"

const AboutTrustedData = [
    {
        h3 : "Our Servises",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        h3 : "How Can I Help You",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        h3 : "Our TheWayShop",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

]
function OurServisePage(){
    return(
        <>
            <TopMain />
            <header>
                <Header page="ourservise"/>
            </header>
            <AboutHero title="OurServise"/>
            <AboutTrustedRow />
            <div class="aboutTristedRow">
              
              {
               AboutTrustedData.map(function(item){
                   return(
                       <>
                       <AboutTrustedRowMain h3={item.h3} p={item.p}/>
                       </>
                   )
               })
              }
           </div>
           <OurTeam />
           <InstagramBox />
            <Footer />
        </> 
    )
}

export default OurServisePage