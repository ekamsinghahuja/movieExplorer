import React, { useEffect, useState } from 'react'
import './Cat.css'


const Cat = ({selectedGenre,setSelectedGenre,handleGenreSelect,genres,fetchMovies}) => {
    
   
    useEffect(()=>{
        console.log(selectedGenre);
    },[selectedGenre])
  return (
    <div className="movie-menu">
        <h1 className='centered'>Filter by Genre</h1>
        <ul>
            {Object.keys(genres).map((genre, index) => (
                <li key={index} className={selectedGenre === genre ? 'active' : ''} onClick={() => handleGenreSelect(genre)}>
                    {genre}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Cat
