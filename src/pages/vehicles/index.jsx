import { createContext, useEffect, useRef, useState } from "react"
import Header from "../../components/header"
import './styles.css'
import moment from "moment";
import Tool from "../../components/tool"
import { NavLink, useSearchParams } from "react-router-dom";
import Pagination from "../../components/pagination";
const {getVehicles, removeVehicle} = require("../../service/vehicles")

function Vehicles() {

    const [vehicles, setVehicles] = useState([]);
    const [keyword, setKeyword] = useState("")
    const [searchParam, setSearchParam] = useSearchParams();
    const [countPage, setCountPage] = useState(0)
    const skip = useRef(0)
    const status = searchParam.get('status');
    const page = parseInt(searchParam.get('page') || 1)
    useEffect(() => {
        loadData(keyword, status, page)
    },[keyword, status, page])

    async function loadData(keyword, status, page) {
        const data = await getVehicles({keyword, status, page});
        setCountPage(data.totalPages)
        setVehicles(data.items)
        skip.current = data.skip 
    }

    function handleSearchParam(currentStatus) {
        
        if(status === currentStatus.status) {
            const param = searchParam.delete("status")
            setSearchParam(param)
        }else {
            setSearchParam({
                status: currentStatus.status
            })
        }
    }

    function handleSearch(e) {
        const keyword = e.target.value
        setKeyword(keyword)
    }

    async function handleRemoveVehicle(id) {
        await removeVehicle(id)
        await loadData()
    }

    function handlePagination(page) {
        setSearchParam({page})
    }

    return (
        <>
            <Header/>
            
            <div className="vehicle-content">
                <div className="container">
                    <Tool handleSearch={handleSearch} setSearchParam={handleSearchParam} currentStatus={status}/>
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
                                        <td>{skip.current + index + 1}</td>
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
                    <Pagination countPage={countPage} handlePagination={handlePagination} currentPage={page} />
                </div>
            </div>
        </>
    )
}

export default Vehicles