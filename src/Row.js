import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './request';
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer";

import './Row.css'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const Row = (props) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState("")

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return requests;
        };
        fetchData();
    }, [props.fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            settrailerUrl("");
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then(url =>{
                const urlParams = new URLSearchParams( new URL(url).search);
                 settrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log({trailerUrl}))
        }
    }

    return(
        <div className="row">
                <h2>{props.title}</h2>
                <div className="row__posters">
                    {/* several row__posters*/ }

                    {movies.map(movie => (
                        <img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                        src={`${IMG_BASE_URL}${
                        props.isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}></img>
                    ))}
                </div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row