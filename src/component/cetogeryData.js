
function CategoriesData(data) {
    return (
        <>
            <div className="shop-cat-box">
                <img className="img-fluid" src={data.img} alt="" />
                <a className="btn hvr-hover" href="#">{data.a}</a>
            </div>



        </>
    )
}

export default CategoriesData