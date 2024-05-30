import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieItem from '../MovieItem/MovieItem';
import './MovieDisplay.css';


const MovieDisplay = ({options,movie_list,setMovieList,fetch_ml_home}) => {
    
    useEffect(()=>{
        fetch_ml_home();
    },[])
    return (
        <div className='Movie-display' id='Movie-diasplay'>
            <h1 className="centered">Top Movies for you</h1>
            <div className="Movie-display-list">
                {movie_list.map((item,index)=>{
                   console.log(item)
                   const poster_path = item.poster_path;
                   const title = item.title;
                   const overview = item.overview;
                   return <MovieItem poster_path={poster_path} title={title} overview={overview} />;
                })}
            </div>
        </div>
    )
}

export default MovieDisplay
