import React from "react";
import { Rate } from "../components/Rate";

export const MovieCard = ({ movie }) => {
  return (
    <div className="MovieList">
      <img 
      src={movie.image}
        alt="pic"/>
      <div>
        <Rate rating={movie.rating} />
        <span>{movie.name}</span>
        <br />
        <span>{movie.date}</span>
      </div>
      <br />
      <br />
    </div>
  );
};