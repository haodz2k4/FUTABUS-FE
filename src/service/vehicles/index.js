import axios from "axios"

const API_URL = `http://localhost:4000/api/v1/vehicles`

export const getVehicles = async ({keyword = ""}) => {
    const response = await axios.get(API_URL,{
        params: {
            keyword
        }
    })
    return response.data.data.items
}

export const createVehicle = async (data) => {
    const response = await axios.post(API_URL,data)
    return response.data.data
}

export const updateVehicle = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data.data 
}

export const getVehicle = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data.data
}

export const removeVehicle = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
}