// import React, { useEffect,useState } from 'react'
// import { API_OPTIONS } from "../utils/constants";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addTrailerVideo } from '../utils/moviesSlice';




// const VideoBackground = ({movieID}) => {


//   //fetch trailer video

//   // const trailerVideo =useSelector(store =>store.movies?.trailerVideo)

//   // const dispatch=useDispatch();

//   const [trailerID,setTrailerId]=useState(null);
//   // const [trailerId,setTrailerId]=useState(null)

//   const getMovieVideos =async()=>{


//     const data= await fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', API_OPTIONS)
//     const json =await data.json();
//     console.log("ok",json);

//     const filterData = json.results.filter((video)=>video.type === "Trailer")
//     const trailer=filterData.length ? filterData[0]:json.results[0];
//     // console.log("okay",trailer);
//     // setTrailerId(trailer.key);

//     // dispatch(addTrailerVideo(trailer))

//   }

//   useEffect(()=>{

//     getMovieVideos();

//   },[])




//   return (
//     // <div>
//     //   <iframe 
//     //   width="560" 
//     //   height="315" 
//     //   // src={"https://www.youtube.com/embed/"+trailerVideo?.key}

//     //   src={"https://www.youtube.com/embed/"+trailerID}

//     //   title="YouTube video player" 
//     //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
//     // </div>
//   )
// }

// export default VideoBackground;






// // {
// //   "id": 955916,
// //   "results": [
// //     {
// //       "iso_639_1": "en",
// //       "iso_3166_1": "US",
// //       "name": "Kevin Hart Tries Not To Laugh at His Own Jokes",
// //       "key": "aHMnP0Z3Y9Y",
// //       "site": "YouTube",
// //       "size": 1080,
// //       "type": "Featurette",
// //       "official": true,
// //       "published_at": "2024-01-05T20:30:00.000Z",
// //       "id": "659f607e4fd14101317dac4b"
// //     },
// //     {
// //       "iso_639_1": "en",
// //       "iso_3166_1": "US",
// //       "name": "New Year's Final Trailer",
// //       "key": "QfFasuouxQI",
// //       "site": "YouTube",
// //       "size": 1080,
// //       "type": "Trailer",
// //       "official": true,
// //       "published_at": "2024-01-01T17:00:02.000Z",
// //       "id": "6593277c64f716677d8f58e8"
// //     },
// //     {
// //       "iso_639_1": "en",
// //       "iso_3166_1": "US",
// //       "name": "Official Trailer",    //youtube key
// //       "key": "m2L-Sa_6MU0",
// //       "site": "YouTube",
// //       "size": 1080,
// //       "type": "Trailer",
// //       "official": true,
// //       "published_at": "2023-11-05T21:25:00.000Z",
// //       "id": "65480a1ed55c3d00e2128de4"
// //     }
// //   ]
// // }



import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"
// import useMovieTrailer


const VideoBackground = ({movieId}) => {

  const trailerVideo =useSelector((store)=>store.movies?.trailerVideo)

  useMovieTrailer(movieId);

    

    return(


      <div className="w-screen">
        <iframe 
        className="w-screen aspect-video"
       
        // src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&auto=1"} 

         src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}

        //  src="https://www.youtube.com/embed/QfFasuouxQI?si=OJxLS0glpFPZZkgJ?&autoplay=1&mute=1"



        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

      </div>
      
    )


    

};

export default VideoBackground;


// src="https://www.youtube.com/embed/QfFasuouxQI?si=OJxLS0glpFPZZkgJ?&autoplay=1&mute=1"

// src="https://www.youtube.com/embed/QfFasuouxQI?si=OJxLS0glpFPZZkgJ" 

//src="https://www.youtube.com/embed/QfFasuouxQI?si=3hx659jHNiQ6D-bZ"

// {"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1"} 

// src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&auto=1"}