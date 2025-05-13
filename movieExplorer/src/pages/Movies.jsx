import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Movies({movies, setMovies}) {
  return (
    <>
      <h2>Movies</h2>
      { movies != undefined ? (
        <ul style={{listStyle:"none"}}>
          {
            movies.map((item, index)=>(<li key={index}><Link to={`/moviedetails/${item.id}`}><p>{item.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
            </Link></li>))
          }
        </ul>
        ):(<p>Loading...</p>)
      }
    </>
  )
}