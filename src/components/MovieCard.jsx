// Movies or series cards details
import '../styles/style.css';
import starIcon from '../images/star_icon.png';

const MovieCard = ({movie}) => {
    const date = new Date(movie.release_date || movie.first_air_date);
    const year = date.getFullYear();
    return (
            <div className='movie'>
                <div>
                    <p>{year}</p>
                </div>
                <div>
                    <img src={starIcon} alt="starIcon" />
                    <p>{movie.vote_average.toFixed(1)}</p>   
                </div>
                <div>
                    <img src = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
                </div>
                <div>
                    <span>{movie.original_language}</span>
                    <h3>{movie.title || movie.name}</h3>
                </div>
            </div>
    )
}

export default MovieCard;