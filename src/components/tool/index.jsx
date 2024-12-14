import BtnCreate from './btn-create'
import Search from './search'
import Sort from './sort'
import Status from "./status"
import './styles.css'

function Tool({handleSearch, setSearchParam, currentStatus, handleSortSelect, currentOption}) {

    return (
        <div className="tool-box">
            <Search handleSearch={handleSearch}/>
            <BtnCreate/>
            <Status setSearchParam={setSearchParam} currentStatus={currentStatus}/>
            <Sort handleSortSelect={handleSortSelect} currentOption={currentOption}/>
        </div>
    )

}

export default Tool