import { useEffect, useState } from "react"
import Header from "../../components/header"
import { useParams } from "react-router-dom"
import { getVehicle } from "../../service/vehicles"
import { updateVehicle } from "../../service/vehicles"
import { useNavigate } from "react-router-dom"
function Edit() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        async function loadVehicle() {
            const vehicle = await getVehicle(id);
            setVehicle(vehicle)
        }
        loadVehicle()
    },[])

    function onChangeUpdate(e) {
        const name = e.target.name  
        const value = e.target.value 

        setVehicle({
            ...vehicle,
            [name]: value
        })
    }

    function handleUpdateSubmit(e) {
        e.preventDefault()

        updateVehicle(id, vehicle)
        navigate("/vehicles")

    }   

    return (
        <>
            <Header/>
            <div className="container">
                <div className="update-container" onSubmit={handleUpdateSubmit}>
                    <form action="" className="form-update">
                        <h1>Cập nhật</h1>
                        <input type="text" name="name" onChange={onChangeUpdate} defaultValue={vehicle.name}/>
                        <input type="text" name="type"  onChange={onChangeUpdate}  defaultValue={vehicle.type}/>
                        <input type="text" name="status"  onChange={onChangeUpdate}  defaultValue={vehicle.status}/>
                        <input type="value" name="capacity"  onChange={onChangeUpdate}  defaultValue={vehicle.capacity}/>
                        <button className="btn">Cập nhật</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit