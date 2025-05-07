import React from 'react'

const MovieCard = ({title, poster, year, rating}) => {
  return (
    <div className='w-1/6 bg-none flex flex-col '>
        <div className="image w-[150px] h-[300px] mb-1">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" height={300} width={200} className='rounded'/>
            <div className="mt-1">
            <p className="font-bold text-sm w-[150px]">{title}</p>
                <div className="flex items-center justify-between w-[150px]">
                <p className="font-bold text-xs">{year.split('-')[0]}</p>
                    <p className="text-xs flex"><span role="img" aria-label="tomato">🍅</span>{Math.round((rating * 10))}%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard