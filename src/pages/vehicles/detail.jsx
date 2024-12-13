import { useEffect, useState } from "react"
import {getVehicle} from "../../service/vehicles"
import { useParams } from "react-router-dom";
import Header from "../../components/header";
function Detail() {

    const {id} = useParams()
    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        loadData()
    },[])

    async function loadData() {
        const vehicle = await getVehicle(id)
        setVehicle(vehicle)
    }
    return (
        <>
            <Header/>
            <ul>
                <li>Id: <strong>{id}</strong></li>
                <li>Name: <strong>{vehicle.name}</strong></li>
                <li>Type: <strong>{vehicle.type}</strong></li>
                <li>Status: <strong>{vehicle.status}</strong></li>
                <li>Capacity: <strong>{vehicle.capacity}</strong></li>
                <li>createdAt: <strong>{vehicle.createdAt}</strong></li>
                <li>updatedAt: <strong>{vehicle.updatedAt}</strong></li>
            </ul>
        </>
    )
}

export default Detail