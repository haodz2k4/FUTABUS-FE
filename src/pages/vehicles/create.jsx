import { useState } from "react";
import Header from "../../components/header";
import { createVehicle } from "../../service/vehicles";
import { useNavigate } from "react-router-dom";
function Create() {

    const [newVehicle, setNewVehicle] = useState({})
    const navigate = useNavigate()
    async function handleCreateVehicle(e) {
        e.preventDefault()

        
        await createVehicle(newVehicle)
        navigate("/vehicles")
    }

    function handleChangeInp(e) {
        const name = e.target.name 
        const value = e.target.value;
        setNewVehicle({
            ...newVehicle,
            [name]: value
        })
    }
    


    return (
        <>
            <Header/>
            <div className="container">
                <div className="create-container">
                    <div className="create-box">
                        <form action="" className="create-form" onSubmit={handleCreateVehicle}>
                            <h1>Thêm phương tiện</h1>
                            <div className="inp-box">
                                <div className="inp-group">
                                    <span>Name: </span>
                                    <input type="text" className="inp" name="name" id="" onChange={handleChangeInp} />
                                </div>
                                <div className="inp-group">
                                    <span>Type: </span>
                                    <input type="text" className="inp" name="type" id="" onChange={handleChangeInp} />
                                </div>
                            </div>
                            <div className="inp-box">
                                <div className="inp-group">
                                    <span>Status: </span>
                                    <input type="text" className="inp" name="status" id="" onChange={handleChangeInp}/>
                                </div>
                                <div className="inp-group">
                                    <span>Capacity: </span>
                                    <input type="number" defaultValue="1" min="1" className="inp" name="capacity" id="" onChange={handleChangeInp} />
                                </div>
                            </div>
                            <button className="btn btn-submit">Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create