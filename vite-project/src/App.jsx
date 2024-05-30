import React, { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'



import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home/Home'
import Cat from '../components/Category/Cat'


import axios from 'axios'
import Search from '../components/search/Search'

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';


const genres = {
  "Action": 28,
  "Adventure": 12,
  "Animation": 16,
  "Comedy": 35,
  "Crime": 80,
  "Documentary": 99,
  "Drama": 18,
  "Family": 10751,
  "Fantasy": 14,
  "History": 36,
  "Horror": 27,
  "Music": 10402,
  "Mystery": 9648,
  "Romance": 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  "Thriller": 53,
  "War": 10752,
  "Western": 37
};

const App = () => {
  
  const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTk2OWY3MTZhMWI4ZWE3YmUwNzUxMmFjYTVlYTdjMCIsInN1YiI6IjY2NTg4MmE5YmNlMmFjOTY4OTUwNWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5e9pzgqfUk1EZ9kbdpbYkGh6PxCO_ZIlMgXE5dBkxC8'
      }
  };
  
  const [movie_list,setMovieList] = useState([]);
  const fetch_ml_home = async(req,res)=>{
      let response = await axios.request(options)
      
      .catch(function (error) {
          console.error(error);
      });
      
      setMovieList(response.data.results);
      console.log(response.data.results)
      
  }
  const fetchMovies = async (genre) => {
      try {
          const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
              params: {
                api_key: '25969f716a1b8ea7be07512aca5ea7c0',
                with_genres: genres[genre]
              }
          });
          setMovieList(response.data.results);
          console.log(response.data.results);
          
      } catch (error) {
          console.error('Error fetching movies:', error);
      }
  };
  const fetchingQuerybyid = async (query) => {
      try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${query}`, {
              params: {
                  api_key: '25969f716a1b8ea7be07512aca5ea7c0',
              }
          });
          console.log(response.data);
          return response.data; // Return the data
      } catch (error) {
          console.error('Error fetching movies by ID:', error);
          throw error; // Throw the error to handle it in the calling function
      }
  }

  const fetchingQuery = async (query) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: '25969f716a1b8ea7be07512aca5ea7c0',
                query: query,
            }
        });
        const results = response.data.results;

        // Map over each result and fetch details by ID concurrently
        const promises = results.map(async (result) => {
            const id = result.id;
            const data = await fetchingQuerybyid(id);
            return data;
        });

        // Wait for all promises to resolve
        const moviesData = await Promise.all(promises);
        console.log('Movies Data:', moviesData);
        // Process the movies data further as needed
        setMovieList(moviesData);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}
  const [selectedGenre, setSelectedGenre] = useState('');
  const handleGenreSelect = (genre) => {
    if (selectedGenre===genre){
        setSelectedGenre('')
        fetch_ml_home();
        
    }
    else{
        setSelectedGenre(genre);
        fetchMovies(genre);
        
    }
  };
  return (
    <div className='app'>
      <Navbar />
      <Cat selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} handleGenreSelect={handleGenreSelect} genres={genres} fetchMovies={fetchMovies}/>
      <Search fetchingQuery={fetchingQuery}/>
      <Home options={options} movie_list={movie_list} setMovieList = {setMovieList} fetch_ml_home={fetch_ml_home}/>
      
    </div>
  )
}

export default App

