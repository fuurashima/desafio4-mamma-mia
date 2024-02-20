import CartList from "../components/CartList.jsx"
import { useContext } from "react"
import Context from "../context/context.jsx"

const Cart = () => {
    const { cart, addToCart, removeFromCart, cartTotal } = useContext(Context)

    return (
        <main>
            <div className="cart">
                <h2>Detalles del pedido</h2>
                {
                    cart.length !== 0 ?
                        <CartList cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            cartTotal={cartTotal}>
                        </CartList>
                        : <p className="empty-cart">No hay elementos en el carrito</p>
                }
            </div>
        </main>
    )
}

export default Cart