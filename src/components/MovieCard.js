import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
// import { useParams } from "react-router-dom";
import VideoBackground from './VideoBackground';
import { useDispatch } from 'react-redux';
import { addMovieId } from '../utils/moviesSlice';
 
const MovieCard = ({id,poster_path}) => {


  const dispatch=useDispatch();
  
  const playVideo = () => {
    
    console.log("hello =",id);
    // const {movieId}=useParams();
    dispatch(addMovieId(id));

    <VideoBackground moveId={id}/>;

    



  };
  
  if(!poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-4 group">
        <img className=" cursor-pointer transition-transform transform scale-100 group-hover:scale-110 hover:shadow-lg rounded-lg" alt="movie card" 
        src={IMG_CDN_URL+poster_path}
        onClick={playVideo}
        />
    </div>
  )
}

export default MovieCard


//to fetch from tmdb we search for image api in search bar of google -> basics khulega usmei
//img_cdn_url which need to be used when using images


