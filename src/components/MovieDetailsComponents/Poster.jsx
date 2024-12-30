// movie or series poster
import React from 'react';

function Poster({ posterPath, title }) {
    return (
        <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="poster-image"
        />
    );
}

export default Poster;
