import React from "react";
import { PAGE_SIZE, NUM_OF_ADJACENT_PAGES } from "../constants";

export default function Pagination({ items, getRecentWorkouts }) {
    const { totalPages, number: currentPage, first: isFirst, last: isLast } = items;

    // Creates the navigation items 1...number of pages
    const getNavigationItems = (totalPages, currentPage) => {
        const navigationItems = [];
        if(currentPage - 1 > 0) {
            navigationItems.push(<li key={-1}><span className="pagination-ellipsis">&hellip;</span></li>);
        }
        for(let i = 0; i < totalPages; i++) {
            if(i >= currentPage - NUM_OF_ADJACENT_PAGES && i <= currentPage + NUM_OF_ADJACENT_PAGES) {
                navigationItems.push(
                    <li key={i}>
                        <button 
                            // TODO: Add user id dynamically
                            onClick={() => getRecentWorkouts(i, PAGE_SIZE, 5)}
                            className={currentPage === i ? "pagination-link is-current" : "pagination-link"}>{i + 1}
                        </button>
                    </li>
                )
            }
        }
        if(currentPage + 1 < totalPages - 1) {
            navigationItems.push(<li key={totalPages}><span className="pagination-ellipsis">&hellip;</span></li>);
        }
        return navigationItems;
    }

    // TODO: Add user id dynamically in both the previous and next buttons
    return(
        <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
            
            <button 
                disabled={isFirst} 
                onClick={() => getRecentWorkouts(currentPage - 1, PAGE_SIZE, 5)} 
                className="pagination-previous"
            >Previous</button>
            <ul className="pagination-list">
                {getNavigationItems(totalPages, currentPage)}
            </ul>
            <button 
                disabled={isLast} 
                onClick={() => getRecentWorkouts(currentPage + 1, PAGE_SIZE, 5)} 
                href="#" 
                className="pagination-next"
            >Next</button>
        </nav>
    );

}