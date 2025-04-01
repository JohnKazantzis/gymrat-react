import React from "react";

export default function Pagination({ items }) {
    const totalPages = items.totalPages;
    const currentPage = items.number;

    const getNavigationItems = (totalPages, currentPage) => {
        const navigationItems = [];
        if(currentPage - 1 > 0) {
            navigationItems.push(<li><span className="pagination-ellipsis">&hellip;</span></li>);
        }
        for(let i = 0; i < totalPages; i++) {
            if(i >= currentPage - 1 && i <= currentPage + 1) {
                navigationItems.push(
                    <li key={i}>
                        <button 
                            className={currentPage === i ? "pagination-link is-current" : "pagination-link"}>{i + 1}
                        </button>
                    </li>
                )
            }
        }
        if(currentPage + 1 < totalPages - 1) {
            navigationItems.push(<li><span className="pagination-ellipsis">&hellip;</span></li>);
        }
        return navigationItems;
    }

    return(
        <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
            <button className="pagination-previous is-disabled">Previous</button>
            <ul className="pagination-list">
                {getNavigationItems(totalPages, currentPage)}
            </ul>
            <button href="#" className="pagination-next">Next page</button>
        </nav>
    );

}