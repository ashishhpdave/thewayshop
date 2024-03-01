import TopMain from "../../../component/common/topMian"
import Header from "../../../component/common/header"
import AboutHero from "../../../component/common/abouthero"
import ContactUs from "../../../component/contactUs"
import InstagramBox from "../../../component/common/instagramBox"
import Footer from "../../../component/common/Footer"

function ContactPage(){
    return(
        <>
            <TopMain />
            <header>
                <Header page="contact"/>
            </header>
            <AboutHero title="Contact"/>
            <ContactUs />
            <InstagramBox />
            <Footer />
        </> 
    )
}

export default ContactPage