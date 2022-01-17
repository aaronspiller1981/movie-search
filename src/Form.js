import { useState } from 'react';
import MovieCard from './MovieCard';
function Form() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault()
        

    
   
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=9356a324d4ec876303f55ff034d9c588&include_adult=false`;
    
    try {
       const res = await fetch(url);
       const data = await res.json();             
       setMovies(data.results);
    }catch(err) {
       console.log(err);
    }
    }
    return (
        <>
        <form className="topForm" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name </label>
            <input type="text"
             className="input" 
             name="query" 
             placeholder="e.g. Wizard Of Oz"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             />
            <button type="submit" className="btn" >Search</button>

        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                  <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>    

        </>
    )
}

export default Form