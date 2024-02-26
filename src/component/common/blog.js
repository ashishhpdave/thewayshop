import MainBlog from "../MainBlog"

const BlogData = [
    {
        img : "images/blog-img.jpg",
        h3 : "Fusce in augue non nisi fringilla",
        p : "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.",
    },
    {
        img : "images/blog-img-01.jpg",
        h3 : "Fusce in augue non nisi fringilla",
        p : "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.",
    },
    {
        img : "images/blog-img-02.jpg",
        h3 : "Fusce in augue non nisi fringilla",
        p : "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.",
    }
]
function LatestBlog() {
    return (
        <>
            <div className="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>latest blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="BlogRowMain">
                        <div className="BlogMain">
                          {
                            BlogData.map(function(item){
                                return(
                                    <>
                                        <MainBlog img={item.img} h3={item.h3} p={item.p}/>
                                    </>
                                )
                            })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestBlog