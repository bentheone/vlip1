/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Header from '../componets/Navbar'
import Aboutus from '../componets/Aboutus'
const API_URL = 'https://api.themoviedb.org/3/account/21907268/watchlist/movies'
const AUTH_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTFmYjFiZjQ4OGI5NzRhZjBjOWJhOWQwMTUzN2MwOCIsIm5iZiI6MTc0MzAwODI1NC43MDgsInN1YiI6IjY3ZTQzMWZlZDcwYzYxNTkwMzc2MTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyV82QwLshFgB1FLfbRzcjuXzWkKB4kQVSUqp0RheFg'

const MoviePage = () => {
    const { id } = useParams();
    console.log(id)
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        Authorization: `Bearer ${AUTH_TOKEN}`,
                        "Content-Type": "application/json"
                    }
                })
                if (!response.ok) throw new Error('Failed to fetch movie')
                const data = await response.json()
                console.log(data)  
                setMovie(data.results.find(movie => movie.id === Number(id)));
                console.log(movie)  
            } catch (error) {
                console.error('Error fetching movie', error)
            } finally {
                setLoading(false);
            }
        } 
        fetchMovie();
    }, [id, movie])
  return (
    <div className='bg-black'>
    <Header />
    <div className="flex bg-black text-white py-1 px-[10%] pb-10">
        {loading ? <p>Loading...</p> : (
            <>
            <div className="w-[40%] h-[500px] pt-4">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-full h-full "/>
        </div>
        <div className="w-[50%] h-[700px] flex flex-col space-y-5 items-start px-6 pt-5">
            <div className="flex flex-col space-y-4 justify-between w-full">
                <h3 className="text-5xl font-bold">{movie.title}</h3>
                <p className="text-1xl">Rating: {Math.round(movie.vote_average)}</p>
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="font-bold">{(movie.release_date).split('-')[0]}</p>
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-700 text-white mx-5">{movie.original_language}</span>
            </div>
            <p className="text-sm italic">{movie.overview}</p>
            <button className="flex justify-between gap-3 my-4 px-4 py-2 rounded bg-none text-white outline-2 outline-white font-bold cursor-pointer">Watch Trailer</button>
            </div>
            </>
        )}
    </div>
    <Aboutus />
    </div>
  )
}

export default MoviePage