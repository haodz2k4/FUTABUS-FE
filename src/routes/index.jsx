import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"



function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="vehicles">
                    <Route index/>
                    <Route path=":id"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers