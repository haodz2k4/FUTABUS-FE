import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Vehicles from "../pages/vehicles"



function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="vehicles" element={<Vehicles/>}>
                    <Route index/>
                    <Route path=":id"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers