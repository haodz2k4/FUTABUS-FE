import Header from "../../components/header"
import './vehicle.css'
function Vehicles({vehicles = []}) {

    return (
        <>
            <Header/>
            <div className="container">
                <table className="table-vehicles">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Tên</th>
                            <th>Loại</th>
                            <th>trạng thái</th>
                            <th>Số lượng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vehicles.map((item) => (
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>45</td>
                                    <td>6</td>
                                    <td>7</td>
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
        </>
    )
}

export default Vehicles