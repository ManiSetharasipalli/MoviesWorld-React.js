// shows message of your clicks
import "../../styles/details.css";

const ShowMessage = ({ movieTitle, isOpen, onClose, lastClicked, remove }) => {
    if (!isOpen) return null;

    let message = '';

    if (remove) {
        // Display removal message
        if (remove === 'favorites') {
            message = `${movieTitle} is removed from your favourites`;
        } else if (remove === 'watchlist') {
            message = `${movieTitle} is removed from your watchlist`;
        }
    } else {
        // Display add message
        if (lastClicked === 'favorites') {
            message = `${movieTitle} is added to your favourites`;
        } else if (lastClicked === 'watchlist') {
            message = `${movieTitle} is added to your watchlist`;
        }
    }

    return (
        <div className="favourites-popup">
            <div>
                <span className="close" onClick={onClose}>
                    ×
                </span>
                {message && (
                    <>
                        <p className="msg">{message}</p>
                        <button className="msg-button" onClick={onClose}>
                            OKAY
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShowMessage;
