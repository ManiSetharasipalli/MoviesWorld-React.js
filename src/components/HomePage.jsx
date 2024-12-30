// Home Root Component
import { useState } from 'react';
import '../styles/style.css';
import Header from "./Header";
import MovieCard from "./MovieCard";
import { useNavigate } from 'react-router-dom';

export default function Home({movies, category, setCategory} ){

   const [search, setSearch] = useState("");
   const navigate = useNavigate();

   const filteredMovies = movies.filter((movie) => {
      const title = movie.title || movie.name;
      return title.toLowerCase().includes(search.toLowerCase());
    });
    

   const handleMovies = (id) => {
    navigate(`/movies/${id}`);
}

   const cards = filteredMovies.map(movie => {
      return(
        <div onClick={() => handleMovies(movie.id)} key={movie.id}>
            <MovieCard movie={movie} />
        </div>
      )
   })

       
  return (
     <div>
        <Header search = {search} setSearch = {setSearch} category={category} setCategory={setCategory}/>
        <div className='container'>
            {cards}
        </div>
     </div>
  )
}