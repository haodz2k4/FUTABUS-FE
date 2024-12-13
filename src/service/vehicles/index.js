import axios from "axios"

const API_URL = `http://localhost:4000/api/v1/vehicles`

export const getVehicles = async () => {
    console.log(API_URL)
    const response = await axios.get(API_URL)
    return response.data.data.items
}