function Sort({handleSortSelect, currentOption}) {

    return (
        <select onChange={handleSortSelect} name="" id="" className="sort-select">
            <option value="">Sắp xếp theo</option>
            <option selected={currentOption === "createdAt-desc"} value="createdAt-desc">Ngày tạo mới nhất</option>
            <option selected={currentOption === "createdAt-asc"} value="createdAt-asc">Ngày tạo cũ nhất</option>
            <option selected={currentOption === "name-asc"} value="name-asc">Tiêu đề từ A - Z</option>
            <option selected={currentOption === "name-desc"} value="name-desc">Tiêu đề từ Z - A</option>
        </select>
    )
}

export default Sort