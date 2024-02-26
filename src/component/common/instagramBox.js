import InstagramMain from "../InstaBar"

const  InstaGramData = [
    {
        img : "images/instagram-img-01.jpg",
    },
    {
        img : "images/instagram-img-02.jpg",
    },
    {
        img : "images/instagram-img-03.jpg",
    },
    {
        img : "images/instagram-img-04.jpg",
    },
    {
        img : "images/instagram-img-05.jpg",
    },
    {
        img : "images/instagram-img-06.jpg",
    },
    {
        img : "images/instagram-img-07.jpg",
    },

]
function InstagramBox() {
    return (
        <>
            <div className="instagram-box">
                <div className="main-instagram owl-carousel owl-theme">
                    {
                        InstaGramData.map(function(item){
                            return(
                                <>
                                    <InstagramMain img={item.img}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default InstagramBox