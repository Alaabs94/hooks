import React from "react";
import { useState } from "react";
import { MovieList } from "./MovieList";
import { MovieData } from "./MovieData";
import { Filter } from "./Filter";
import { Add } from "./Add";

export const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const [rateSearching, setRateSearching] = useState(0);
  const [movies, setMovies] = useState(MovieData);

 
  return (
    <div>
      <Filter
        setTextSearch={setTextSearch}
        setRateSearching={setRateSearching}
        rateSearching={rateSearching}
      />
      <br />
      <br />
      <Add setMovies={setMovies} movies={movies} />
      <br />
      <br />
      <MovieList
        moviesData={movies}
        textSearch={textSearch}
        rateSearching={rateSearching}
      />
    </div>
  );
};