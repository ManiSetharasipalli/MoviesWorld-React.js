// main component for MoviesWorld and fetch data from api
import React, { useEffect, useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import Movie from './components/MovieDetails';
import './styles/api_styles.css'

const API_KEY = process.env.REACT_APP_API_KEY; 

const App = () => {
  const [category, setCategory] = useState('movie/popular')
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

// spinner for loading using tailwind css

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
          <p className="error">{error}</p>
          <p className="error">We're currently experiencing issues with the TMDB API. Please try again later.</p>
      </div>
    );
  }

  return (
    <Routes>
]        <Route path="/" element={<HomePage movies={movies} category = {category} setCategory= {setCategory}/>} />
         <Route path="/movies/:id" element={<Movie movies={movies} />} />
]    </Routes>
  );
};

export default App;
