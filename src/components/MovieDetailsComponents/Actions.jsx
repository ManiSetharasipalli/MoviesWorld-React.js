// handling the clicks 

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Actions({ isLiked, isAdded, handleClick, handleWatchList }) {
    const favouriteIcon = isLiked ? "fas fa-heart" : "far fa-heart";
    const watchListIcon = isAdded ? "fas fa-bookmark" : "far fa-bookmark";

    return (
        <div className="review">
            <i className={`${favouriteIcon} like`} onClick={handleClick} alt="Like Button"></i>
            <i className={`${watchListIcon} reviews`} onClick={handleWatchList} alt="Watchlist Button"></i>
        </div>
    );
}

export default Actions;
