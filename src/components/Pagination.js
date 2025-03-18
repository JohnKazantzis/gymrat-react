import React from "react";

export default function Pagination() {
    let items = [
        {
            pageNumber: 1,
            isSelected: true
        },
        {
            pageNumber: 2,
            isSelected: true
        },
        {
            pageNumber: 3,
            isSelected: true
        }
    ]

    return(
        <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
            <button className="pagination-previous is-disabled" title="This is the first page">Previous</button>
            <ul className="pagination-list">
                {
                    items.map(item => (
                        <li key={item.pageNumber}>
                            <button 
                                className={item.isSelected ? "pagination-link is-current" : "pagination-link"}
                                >{item.pageNumber}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <button href="#" className="pagination-next">Next page</button>
        </nav>
    );

}