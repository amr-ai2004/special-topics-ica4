import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)
  const api="https://api.themoviedb.org/3/movie/popular?api_key=e6931dbed981ba6d29683fd65f60799a";

  return (
    <>
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
            <Route path="*"/>
          </Routes>
        </main>
      </Router>
      <Footer/>
    </>
  )
}

export default App
