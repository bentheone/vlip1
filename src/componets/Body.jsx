import React, { useEffect, useState } from 'react'
import {FaFire} from 'react-icons/fa'
import { Link } from 'react-router'
import MovieCard from './MovieCard'
const API_URL = 'https://api.themoviedb.org/3/account/21907268/watchlist/movies'
const AUTH_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTFmYjFiZjQ4OGI5NzRhZjBjOWJhOWQwMTUzN2MwOCIsIm5iZiI6MTc0MzAwODI1NC43MDgsInN1YiI6IjY3ZTQzMWZlZDcwYzYxNTkwMzc2MTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyV82QwLshFgB1FLfbRzcjuXzWkKB4kQVSUqp0RheFg'

const Body = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            "Content-Type": "application/json"
          }
        });
        if(!response.ok) throw new Error('Failed to fetch movies');
        const data = await response.json();
        console.log(data);
        setMovies(data.results)
      } catch (error){
        console.error('Error fetching movies',error)
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [])
  return (
    <>
    <div className='flex flex-col items-center justify-between bg-black text-white px-[10%] py-1'>
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl flex gap-1"><span><FaFire className='text-yellow-500 mt-1.5'/></span>Trending</h3>
        <Link to='/more' className='text-white'>See More</Link>
      </div>
      <div className="grid grid-cols-6 w-full gap-6 mt-3 text-center">
        {loading ? <p>Loading...</p> : movies.slice(0,12).map(movie => (
          <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path} year={movie.release_date} rating={movie.vote_average}/>
        ))}
      </div>
    </div>
    <div className='flex flex-col items-center justify-between bg-black text-white px-[10%] py-1 mt-5'>
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl font-bold flex gap-1 tracking-tighter px-5">YOU MIGHT ALSO LIKE</h3>
        <Link to='/more' className='text-white'>See More</Link>
      </div>
      <div className="grid grid-cols-6 w-full gap-6 mt-3 text-center">
        {loading ? <p>Loading...</p> : movies.slice(12,24).map(movie => (
          <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path} year={movie.release_date} rating={movie.vote_average}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Body