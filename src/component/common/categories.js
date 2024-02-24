import CategoriesData from "../cetogeryData"

const CetpgryMainData = [
    {
        img: "images/tshirt-img.png",
        a: "T-shirt"
    },
    {
        img: "images/shirt-img.png",
        a: "Shirt"
    },
    {
        img: "images/shoses-img.png",
        a: "Shoses"
    },
    {
        img: "images/wallete-img.png",
        a: "T-shirt"
    },
    {
        img: "images/beg-img.png",
        a: "Shirt"
    },
    {
        img: "images/women-shoses-img.png",
        a: "Shoses"
    },
]

function CategoriesShop() {
    return (
        <>
            <div className="categories-shop">
                <div className="container">
                    <div className="row">

                        <div className="BoxxesRow">

                            {
                                CetpgryMainData.map(function (item) {
                                    return (
                                        <>
                                            <CategoriesData img={item.img} a={item.a} />
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

export default CategoriesShop