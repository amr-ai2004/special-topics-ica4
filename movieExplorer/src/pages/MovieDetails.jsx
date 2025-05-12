import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
  const {id}=useParams();
  const [details, setDetails] = useState();

  useEffect(()=>{
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=e6931dbed981ba6d29683fd65f60799a`)
    .then(result=>setDetails(result.data))
  },[]);

  return (
    <div>
      <h2>MovieDetails</h2>
      {
        details != undefined ? (
        <>
          <p>{details.title}</p>
          <p>{details.overview}</p>
          <p>{details.vote_average}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={details.title}/>
        </>
        ):(<>Loading...</>)
      }
    </div>
  )
}
