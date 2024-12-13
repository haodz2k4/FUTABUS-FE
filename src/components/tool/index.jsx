import BtnCreate from './btn-create'
import Search from './search'
import './styles.css'

function Tool({handleSearch}) {

    return (
        <div className="tool-box">
            <Search handleSearch={handleSearch}/>
            <BtnCreate/>
        </div>
    )

}

export default Tool