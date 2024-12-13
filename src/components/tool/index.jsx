import BtnCreate from './btn-create'
import Search from './search'
import Status from "./status"
import './styles.css'

function Tool({handleSearch, setSearchParam, currentStatus}) {

    return (
        <div className="tool-box">
            <Search handleSearch={handleSearch}/>
            <BtnCreate/>
            <Status setSearchParam={setSearchParam} currentStatus={currentStatus}/>
        </div>
    )

}

export default Tool