import AboutMiddleRow from "../../../component/aboutmiddle"
import Footer from "../../../component/common/Footer"
import AboutTrustedRow from "../../../component/common/aboutTrustedRow"
import AboutHero from "../../../component/common/abouthero"
import Header from "../../../component/common/header"
import InstagramBox from "../../../component/common/instagramBox"
import OurTeam from "../../../component/common/ourTeam"
import TopMain from "../../../component/common/topMian"

function AboutPage(){
    return(
        <>
            <TopMain />
            <header>
                <Header page="about"/>
            </header>
            <AboutHero title="About Us"/>
            <AboutMiddleRow />
            <AboutTrustedRow />
            <OurTeam />
            <InstagramBox />
            <Footer />
        </>
    )
}

export default AboutPage