import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie({id, year, title, summary, poster,genres}){
    return (
      <MovieStyled>
       <Link to={`/movie/${id}`} state={{ year, title, summary, poster, genres }} >
         <img src={poster} alt={title} />
         <div className="movie__data">
            <h3 className="movie__title">{title}
            <span className="movie__year">{year} </span>
            </h3>
            <ul className="genres">
              {genres.map((genre, index) =>(
              <li key={index} className="genres__genre">{genre}</li>
              ))}
            </ul>
            <p className="movie__summary">{summary.length > 180 ? summary.slice(0,180)+'...':summary}</p>
         </div>
      </Link>
      </MovieStyled>
    );
  }
Movie.propTypes ={
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired
};

export default Movie;
const MovieStyled = styled.div`
  padding: 20px;
  width: 45%;
  background-color: white;
  border-radius: 2px;
  margin-top: 70px;
  box-shadow: 0 0 10px #777;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
  > a {
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    color: #111;
  }
  img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 0 10px #777;
  }
  .movie__data {
    .movie__title {
      font-size: 24px;
    }
    .movie__year {
      font-size: 16px;
      padding-left: 10px;
    }
    .genres {
      font-size: 14px;
      padding-left: 0;
      list-style: none;
      color: #777;
      display: flex;
      li:not(:first-child)::before {
        content: " ,";
        display: inline-block;
      }
    }
    .movie__summary {
      color: #777;
    }
  }
`;
