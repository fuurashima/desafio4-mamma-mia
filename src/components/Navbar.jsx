import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.jsx"

const Navbar = () => {
    const { cartTotal } = useContext(Context)
    return (
        <nav className="main-nav">
            <Link to="/"><h3><i className="fa-solid fa-pizza-slice"></i> Pizzería Mamma Mia </h3></Link>
            <Link to="/carrito"><i className="fa-solid fa-cart-shopping"> $ {cartTotal()} </i></Link>
        </nav>
    )
}

export default Navbar