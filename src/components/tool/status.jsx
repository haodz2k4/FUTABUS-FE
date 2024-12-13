function Status({setSearchParam, currentStatus}) {
    
    
    return (
        <div className="filter-group">
            <button className={"btn btn-filter" + (currentStatus === "available" ? " btn-active" : "")} onClick={() => setSearchParam({"status": "available"})}>available</button>
            <button className={"btn btn-filter" + (currentStatus === "in_use" ? " btn-active" : "")} onClick={() => setSearchParam({"status": "in_use"})}>in_use</button>
            <button className={"btn btn-filter" + (currentStatus === "maintenance" ? " btn-active" : "")} onClick={() => setSearchParam({"status": "maintenance"})}>maintenance</button>
        </div>
    )
}

export default Status 