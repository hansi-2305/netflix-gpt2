


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";



const useUpcomingMovies=()=>{
    //fetch data from tmdb api and update sore

  const dispatch=useDispatch();

  const upcomingMovies= useSelector((store)=>store.movies.upcomingMovies);





  const getUpcomingMovies=async()=>{
    

    const data=await  fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));

  }

  useEffect(()=>{

    !upcomingMovies && getUpcomingMovies();

  },[])
};

export default useUpcomingMovies







// fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)