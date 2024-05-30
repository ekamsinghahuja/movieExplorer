import React from 'react'
import MovieDisplay from '../../components/movieShow/MMovieDisplay'

const Home = ({options,movie_list,setMovieList,fetch_ml_home}) => {
  return (
    <div>
        <MovieDisplay options={options} movie_list={movie_list} setMovieList={setMovieList} fetch_ml_home={fetch_ml_home}/>
    </div>
  )
}

export default Home
