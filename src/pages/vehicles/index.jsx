import { createContext, useEffect, useState } from "react"
import Header from "../../components/header"
import './styles.css'
import moment from "moment";
import Tool from "../../components/tool"
import { NavLink } from "react-router-dom";
const {getVehicles, removeVehicle} = require("../../service/vehicles")

function Vehicles() {

    const [vehicles, setVehicles] = useState([]);
    const [keyword, setKeyword] = useState("")
    
    useEffect(() => {
        loadData(keyword)
    },[keyword])

    async function loadData(keyword) {
        const items = await getVehicles({keyword});
        setVehicles(items)
    }

    function handleSearch(e) {
        const keyword = e.target.value
        setKeyword(keyword)
    }

    async function handleRemoveVehicle(id) {
        await removeVehicle(id)
        await loadData()
    }

    return (
        <>
            <Header/>
            
            <div className="vehicle-content">
                <div className="container">
                    <Tool handleSearch={handleSearch}/>
                    <table className="table-vehicles">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Tên</th>
                                <th>Loại</th>
                                <th>trạng thái</th>
                                <th>Số lượng</th>
                                <th>Ngày tạo</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vehicles.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <input type="number" value={item.capacity}/>
                                        </td>
                                        <td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button className="btn btn-edit"><NavLink to={`/vehicles/edit/${item.id}`}>Sửa</NavLink></button>
                                                <button className="btn btn-delete" onClick={() => handleRemoveVehicle(item.id)}>Xóa</button>
                                                <button className="btn btn-detail">Chi tiết</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Vehicles