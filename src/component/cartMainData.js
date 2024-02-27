import { NavLink } from "react-router-dom"

function CartMainData(data) {
    return (
        <>
            <tr>
                <td className="thumbnail-img">
                    <NavLink href="#">
                        <img className="img-fluid" height={"150px"} width={"120px"} src={data.img} alt="" />
                    </NavLink>
                </td>
                <td className="name-pr">
                    <NavLink href="#">
                       <span>{data.span}</span>
                    </NavLink>
                </td>
                <td className="price-pr">
                    <p>{data.p}</p>
                </td>
                <td className="quantity-box"><input type="number" size="4" value="1" min="0" step="1" className="c-input-text qty text"/></td>
                <td className="total-pr">
                    <p>{data.p}</p>
                </td>
                <td className="remove-pr">
                    <NavLink href="#">
                        <i className="fas fa-times"></i>
                    </NavLink>
                </td>
            </tr>
        </>
    )
}

export default CartMainData