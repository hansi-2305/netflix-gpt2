import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-48 pr-4">
        <img alt="movie card" 
        src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard


//to fetch from tmdb we search for image api in search bar of google -> basics khulega usmei
//img_cdn_url which need to be used when using images