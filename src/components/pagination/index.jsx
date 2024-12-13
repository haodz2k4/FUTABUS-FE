import './pagination.css'

function Pagination({countPage, currentPage, handlePagination}) {

    const pages = [] 
    for(let i = 1; i <= countPage; i++) {
        pages.push(i)
    }
    return (
        <div className="pagination-group">
            <div className={"pagination-item pagination-prev" + (currentPage === 1 ? " d-none" : "")} onClick={() => handlePagination(currentPage - 1)}>{"<<<<"}</div>
            {
                pages.map((item) => (
                    <div className={"pagination-item" + (currentPage === item ? ' pagination-active' : '')} onClick={() => handlePagination(item)}>{item}</div>
                ))
            }
            <div className={"pagination-item pagination-prev" + (currentPage === countPage ? " d-none" : "")} onClick={() => handlePagination(currentPage + 1)}>{">>>>"}</div>
        </div>
    )
}

export default Pagination