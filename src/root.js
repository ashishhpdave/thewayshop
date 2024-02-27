import '../src/css/style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home"
import AboutPage from './Pages/Home/About'

function Root(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root