import { formatPrice } from "../utils/utils.jsx"
import { Link } from 'react-router-dom'

const CartList = ({ cart, addToCart, removeFromCart, cartTotal }) => {
    return (
        <div>
            <ul>
                {
                    cart.map((item) => {
                        return (
                            <li key={item.id}>
                                <div className="product">
                                    <img src={item.img} alt={item.name} />
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="price">
                                    <h4>$ {formatPrice(item.price * item.count)}</h4>
                                </div>
                                <div className="btns">
                                    <button className="btn btn-primary" onClick={() => removeFromCart(item)}>-</button>
                                    <p className="bold">{item.count}</p>
                                    <button className="btn btn-secondary" onClick={() => addToCart(item)}>+</button>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>

            <div className="total">
                <h3>Total: $ {cartTotal()} </h3>
                <Link to="/pagar" className="btn btn-primary-pagar">Ir a pagar</Link>
            </div>
        </div>
    )
}

export default CartList