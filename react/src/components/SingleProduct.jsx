
import { NavLink } from "react-router-dom";

const Product = () => {
    return <nav>
        <ul>
            <li>
                <NavLink to = "/productos/1">Product 1</NavLink>
            </li>
            <li>
                <NavLink to = "/productos/2">Product 2</NavLink>
            </li>
            <li>
                <NavLink to = "/productos/3">Product 3</NavLink>
            </li>

        </ul>
    </nav>
}

export default Product