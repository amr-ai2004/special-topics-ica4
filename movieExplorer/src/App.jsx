import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages & Components
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import MyNavbar from './components/MyNavbar';
import Footer from './components/footer';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
      axios("https://api.themoviedb.org/3/movie/popular?api_key=e6931dbed981ba6d29683fd65f60799a")
      .then((result)=>setMovies(result.data.results));
    },[]);
  
  return (
    <>
      <Router>
        <MyNavbar movies={movies}/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies movies={movies} setMovies={setMovies}/>}/>
            <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
            <Route path="*"/>
          </Routes>
        </main>
      </Router>
      <Footer/>
    </>
  )
}

export default App;