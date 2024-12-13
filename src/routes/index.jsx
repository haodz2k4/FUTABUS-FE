import { BrowserRouter, Route, Routes } from "react-router-dom"



function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="vehicles">
                    <Route index/>
                    <Route path=":id"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers