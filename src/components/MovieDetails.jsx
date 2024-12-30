// Root component for all movies or series details
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/style.css';
import '../styles/api_styles.css';
import Poster from './MovieDetailsComponents/Poster';
import Details from './MovieDetailsComponents/Details';
import Actions from './MovieDetailsComponents/Actions';
import Message from './MovieDetailsComponents/Message';

export default function Movie({ movies }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [lastClicked, setLastClicked] = useState('');
    const [remove, setRemove] = useState('');
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <p className="error">"Movie or Series is not Find"</p>
    }

    const date = new Date(movie.release_date || movie.first_air_date);
    const year = date.getFullYear();
    const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
    const getLanguage = (code) => displayNames.of(code) || "Unknown language";

    const handleClick = () => {
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        setLastClicked('favorites');
        setIsPopupOpen(true);

        if (!newLikeStatus) {
            setRemove('favorites');
        } else {
            setRemove('');
        }
    };

    const handleWatchList = () => {
        const newWatchListStatus = !isAdded;
        setIsAdded(newWatchListStatus);
        setLastClicked('watchlist');
        setIsPopupOpen(true);

        if (!newWatchListStatus) {
            setRemove('watchlist');
        } else {
            setRemove(''); // Clear remove state if adding
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="poster">
            <Poster posterPath={movie.poster_path} title={movie.title || movie.name} />
            <div className="details">
                <Details
                    title={movie.title || movie.name}
                    year={year}
                    language={getLanguage(movie.original_language)}
                    voteAverage={movie.vote_average}
                    overview={movie.overview}
                />
                <Actions
                    isLiked={isLiked}
                    isAdded={isAdded}
                    handleClick={handleClick}
                    handleWatchList={handleWatchList}
                />
                <Message 
                    isOpen={isPopupOpen}
                    movieTitle={movie.title || movie.name}
                    onClose={closePopup}
                    lastClicked={lastClicked}
                    remove={remove}
                />
            </div>
        </div>
    );
}
