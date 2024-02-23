import '../src/css/style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home"

function Root(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root