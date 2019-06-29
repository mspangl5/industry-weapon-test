import React, {useState} from "react"

const Paginate = ({render, data}) => {
    const [page, setPage] = useState(0);
    const pageSize = 5;
    const lastPage = data ? (data.length / pageSize) - 1 : 0;

    let rowsToDisplay = data ? data.slice(page * pageSize, (page + 1) * pageSize) : [];
    
    let rows = rowsToDisplay.map((row)=> {
        return render(row);
    })

    const decPage = () => {
        if(page > 0) {
            setPage(page-1);
        }
    }

    const incPage = () => {
        if(page < lastPage) {
            setPage(page+1);
        }
    }

    return (
        <React.Fragment>
            {rows}
            <div className="paginate-butons">
                <button onClick={decPage} disabled={page===0}>Previous</button>
                <button onClick={incPage} disabled={page===lastPage}>Next</button>
            </div>
        </React.Fragment>
    )
}

export default Paginate
