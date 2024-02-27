import AboutTrustedRowMain from "../aboutTrustedMain"

const AboutTrustedData = [
    {
        h3 : "We are Trusted",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        h3 : "WE ARE PROFESSIONAL",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        h3 : "WE ARE EXPERT",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]
function AboutTrustedRow(){
    return(
        <>
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
        </>
    )
}

export default AboutTrustedRow