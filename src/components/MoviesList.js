import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    const renderMoviers = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ));

    return (
        <ul>{renderMoviers}</ul>
    );
}

export default MoviesList;