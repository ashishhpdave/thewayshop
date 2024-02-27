import AboutMiddleRow from "../../../component/aboutmiddle"
import AboutTrustedRow from "../../../component/common/aboutTrustedRow"
import AboutHero from "../../../component/common/abouthero"
import Header from "../../../component/common/header"
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
        </>
    )
}

export default AboutPage