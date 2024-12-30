// description about movies or series 
import React from 'react';
import starIcon from '../../images/star_icon.png';

function Details({ title, year, language, voteAverage, overview }) {
    return (
        <div>
            <p className="details-title">{title}</p>
            <div className="details-info">
                <p className="details-info-desc">{year}</p>
                <p className="details-info-desc">{language}</p>
                <div className="rating">
                    <img src={starIcon} alt="Star Icon" className="rating-icon" />
                    <p className="details-info-desc">{voteAverage.toFixed(1)}</p>
                </div>
            </div>
            <p className="details-description">{overview}</p>
        </div>
    );
}

export default Details;
