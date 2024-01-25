


import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log("movies",movies)
    // console.log
  return (
    <div className="px-6 py-2">

        <h1 className=" text-lg md:text-3xl md:py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll    ">
            
            <div className="flex  ">
                {
                movies?.map((movie)=> <MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path}/>)}
           
            </div>
        </div>
    </div>
  )
}

export default MovieList


// // posterPath={movies[0].poster_path

