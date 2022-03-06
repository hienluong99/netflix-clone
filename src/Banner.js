import React, { useState ,useEffect} from 'react'
import axios from './axios';
import request from './request';
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length)])
            return req;
        }
        fetchData();
    }, [])

    console.log('movie:',movie)

    function truncate(str, max) {
        return str.length > max ? str.substr(0, max-1) + '…' : str;
    }
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title ||movie?.name}</h1>    
           
            
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_descriptions'>{movie.overview}</h1>
            </div> 
            <div className='banner_bottom' />
        </header>
    )
}

export default Banner
