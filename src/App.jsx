import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.jsx'

import Navbar from './components/Navbar.jsx'


import Home from './views/Home.jsx'
import Pizza from './views/Pizza.jsx'
import Cart from './views/Cart.jsx'
import Pay from './views/Pay.jsx'
import Error from './views/Error.jsx'

import { formatPrice } from './utils/utils.jsx'

function App() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
    const updateCart = [...cart]

    if (itemIndex === -1) {
      const pizza = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name
      }

      updateCart.push(pizza)
    } else {
      updateCart[itemIndex].count += 1
    }

    setCart(updateCart)
  }

  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
    const updateCart = [...cart]

    updateCart[itemIndex].count -= 1

    if (updateCart[itemIndex].count <= 0) {
      updateCart.splice(itemIndex, 1)
    }

    setCart(updateCart)
  }

  const cartTotal = () => {
    let total = 0
    cart.forEach((item) => total += item.count * item.price)

    return formatPrice(total)
  }

  useEffect(() => {
    fetch('/pizzas.json')
      .then((res) => res.json())
      .then((json) => setMenu(json))
      .then((error) => console.log(error))
  }, [])

  const globalState = { menu, cart, addToCart, removeFromCart, cartTotal }

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/pizza/:id' element={<Pizza />}></Route>
            <Route path='/carrito' element={<Cart />}></Route>
            <Route path='/pagar' element={<Pay />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>

          
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
