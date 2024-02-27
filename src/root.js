import '../src/css/style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home"
import AboutPage from './Pages/Home/About'
import ProductPage from './Pages/Home/Product'
import CartPage from './Pages/Home/Cart'

function Root(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/product" element={<ProductPage />}/>
                <Route path="/cart" element={<CartPage />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root