
import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from './axios';
import requests from './Requests';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals).then(request => {
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
        }).catch(error => console.log(error));
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            return request;
        }

        fetchData();

    },[])
    function truncate(string, n) {
        return string && string.length > n ? string.substr(0, n - 1) + '...' : string;
      }

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: "url('https://image.tmdb.org/t/p/original/" + (movie && movie.backdrop_path) + "')",
        backgroundPosition: "center center" 
    }}
    >
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie && (movie.title || movie.name || movie.original_name)}
        </h1>
        <div className="banner__buttons">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
            {truncate(movie && movie.overview, 150)} 
        </h1>
    </div>
    <div className='banner__fadeBottom'/>
    </header>
  )
}

export default Banner