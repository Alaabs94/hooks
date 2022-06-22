import React from "react";
import { Rate } from "../components/Rate";
import { Link } from "react-router-dom";

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
        <br/>
        <Link to={{
          pathname: "/movies/" + movie.id,
          state:{link:movie.link, description:movie.description}
        }}>
        <button>More Details</button>
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
};