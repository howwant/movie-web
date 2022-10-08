import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import styled from "styled-components";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
      };
      getMovies = async() =>{
        const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
      }
      async  componentDidMount(){
        this.getMovies();
      }
      render(){
       const {isLoading, movies} = this.state;
        return(
        <MoviesStyled>
          {isLoading ? "잠시만 기다려주세요..." : movies.map(movie =>(
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))} 
        </MoviesStyled>
         );
      };
};
const MoviesStyled = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  padding: 5%;
  padding-top: 0;
  margin: 0 auto;
  overflow-y: scroll;
  height: calc(100% - 100px);
`;

export default Home;
