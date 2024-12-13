import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Vehicles from "../pages/vehicles"
import Create from "../pages/vehicles/create"



function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="vehicles">
                    <Route index element={<Vehicles/>}/>
                    <Route path="create" element={<Create/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers