import { useEffect, useState } from "react"
import Header from "../../components/header"
import './vehicle.css'
import moment from "moment"
import Tool from "../../components/tool"

const {getVehicles} = require("../../service/vehicles")

function Vehicles() {

    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        loadData()
    },[])

    async function loadData() {
        const items = await getVehicles();
        setVehicles(items)
    }

    return (
        <>
            <Header/>
            
            <div className="vehicle-content">
                <div className="container">
                    <Tool/>
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
                                            <input type="number" defaultValue={item.capacity}/>
                                        </td>
                                        <td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button className="btn btn-edit">Sửa</button>
                                                <button className="btn btn-delete">Xóa</button>
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