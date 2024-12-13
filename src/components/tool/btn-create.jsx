import { Link } from "react-router-dom"

function BtnCreate() {
    return (
        <Link to="/vehicles/create" className="btn btn-create">Thêm</Link>
    )
}

export default BtnCreate