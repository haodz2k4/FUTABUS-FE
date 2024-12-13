import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Vehicles from "../pages/vehicles"
import Create from "../pages/vehicles/create"
import Edit from "../pages/vehicles/edit"



function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="vehicles">
                    <Route index element={<Vehicles/>}/>
                    <Route path="create" element={<Create/>}/>
                    <Route path="edit/:id" element={<Edit/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers