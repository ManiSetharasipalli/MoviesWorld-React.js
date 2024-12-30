// Header of MoviesWorld
import '../styles/style.css';
import searchIcon from '../images/search_icon.webp';
import { useState } from 'react';


const Header = ({search, setSearch, category, setCategory}) => {

    const [isNavVisible, setIsNavVisible] = useState(false)

    const handleCategory = (newCategory) => {
        setCategory(newCategory)
      }

    const handleNavBar = () =>{
        setIsNavVisible(prevNav => !prevNav)

    }
    return (
        <div>
            <div className="header">
                <h1 className="title">MoviesWorld</h1>
                <div className='menu-icon' onClick={handleNavBar}>
                    &#9776;
                </div>
                <div className={`navbar ${isNavVisible ? "active" : ""}`}>
                    <p className={`contents ${category === "movie/popular" ? "active" : ""}`} onClick={() =>handleCategory('movie/popular')}>Popular Movies</p>
                    <p className={`contents ${category === "tv/popular" ? "active" : ""}`} onClick={() =>handleCategory('tv/popular')}>Popular TV Shows</p>
                    <p className={`contents ${category === "movie/top_rated" ? "active" : ""}`} onClick={() =>handleCategory('movie/top_rated')}>Top Rated Movies</p>
                    <p className={`contents ${category === "tv/top_rated" ? "active" : ""}`} onClick={() =>handleCategory('tv/top_rated')}>Top Rated TV Shows</p>
                </div>
            </div>
            <div className="app">
                <div className='search'>
                    <input 
                            placeholder="Seach By movie name" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                    />
                    <img src={searchIcon} alt="serchIcon"></img>
                </div>
            </div>
        </div>
    )
}

export default Header