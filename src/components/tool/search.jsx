

function Search() {
    return (
        <div className="search-box">
            
            <span>Tìm kiếm</span>
            <div className="inp-group">
                <input type="text" className="inp-search inp" placeholder="Nhập từ khóa ở đây" name="keyword"/>
                <button className="btn btn-search">Tìm kiếm</button>
            </div>
            
        </div>
    )
}

export default Search