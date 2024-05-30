import React from 'react'
import './MovieItem.css'

const MovieItem = ({poster_path,title,overview}) => {
    let IMG_URL = "https://image.tmdb.org/t/p/w500/" 
    return (
       
        <div className='Movie-item'>
            <div className="Movie-item-image-container">
                <img className="Movie-item-image" src={IMG_URL + poster_path} alt="" />
                <div className="overlay"></div> {/* Add overlay for hover effect */}
            </div>
            <div className="Movie-item-info">
                <div className="Movie-item-name-rating">
                    <p>{title}</p>
                </div>
                <div className="Movie-item-desc-container">
                    <p className="Movie-item-desc">{overview}</p>
                </div>
            </div>
        </div>
        
        
    )
}

export default MovieItem
