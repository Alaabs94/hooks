import './App.css';
import { useState } from 'react';
import { MovieData } from './components/MovieData';
import { MovieList } from './components/MovieList';
import { Filter } from './components/Filter';
import { Add } from './components/Add';


function App() {
  const [textSearch, setTextSearch] = useState("");
  const [rateSearching, setRateSearching] = useState(0);
  const [movies, setMovies] = useState(MovieData);
  return (
    <div>
      
       <Filter setTextSearch={setTextSearch} setRateSearching={setRateSearching} rateSearching={rateSearching} />
      <br /><br />
      <Add setMovies={setMovies} movies={movies} />
      <MovieList moviesData={movies} textSearch={textSearch} rateSearching={rateSearching} />
      
    </div>
  );
}

export default App;
