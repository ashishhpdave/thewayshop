
import OurTeamMain from "../ourTeamMain"

const OurTeamData = [
    {
        img : "images/img-1.jpg",
        h3 : "Williamson",
        span : "Web Developer",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.",
    },
    {
        img : "images/img-2.jpg",
        h3 : "Kristana",
        span : "Web Developer",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.",
    },
    {
        img : "images/img-3.jpg",
        h3 : "Stave jons",
        span : "Web Developer",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.",
    },
    {
        img : "images/img-1.jpg",
        h3 : "Williamson",
        span : "Web Developer",
        p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.",
    },
]
function OurTeam() {
    return (
        <>
            <div class="ourTeamRow">
                <div class="col-12">
                    <h2 class="noo-sh-title">Meet Our Team</h2>
                </div>
                <div class="ourTeamMainRow">
                 {
                    OurTeamData.map(function(item){
                        return(
                            <>
                                <OurTeamMain img={item.img} h3={item.h3} span={item.span} p={item.p}/>
                            </>
                        )
                    })
                 }
                </div>
             
            </div>
        </>
    )
}

export default OurTeam