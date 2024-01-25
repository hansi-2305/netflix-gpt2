// // import React, { useEffect,useState } from 'react'
// // import { API_OPTIONS } from "../utils/constants";
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { addTrailerVideo } from '../utils/moviesSlice';




// // const VideoBackground = ({movieID}) => {


// //   //fetch trailer video

// //   // const trailerVideo =useSelector(store =>store.movies?.trailerVideo)

// //   // const dispatch=useDispatch();

// //   const [trailerID,setTrailerId]=useState(null);
// //   // const [trailerId,setTrailerId]=useState(null)

// //   const getMovieVideos =async()=>{


// //     const data= await fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', API_OPTIONS)
// //     const json =await data.json();
// //     console.log("ok",json);

// //     const filterData = json.results.filter((video)=>video.type === "Trailer")
// //     const trailer=filterData.length ? filterData[0]:json.results[0];
// //     // console.log("okay",trailer);
// //     // setTrailerId(trailer.key);

// //     // dispatch(addTrailerVideo(trailer))

// //   }

// //   useEffect(()=>{

// //     getMovieVideos();

// //   },[])




// //   return (
// //     <div>
// //       <iframe 
// //       width="560" 
// //       height="315" 
// //       // src={"https://www.youtube.com/embed/"+trailerVideo?.key}

// //       src={"https://www.youtube.com/embed/"+trailerID}

// //       title="YouTube video player" 
// //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
// //      </div>
// //   )
// // }

// // export default VideoBackground;





// import {  useSelector } from 'react-redux';
// import useMovieTrailer from '../hooks/useMovieTrailer';


// const VideoBackground = ({movieId}) => {

//     const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//     useMovieTrailer(movieId);

//   return (
//     <div className='w-screen'>
//     <iframe
//     className='w-screen aspect-video'
//     src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}  //? agar null hoga ye nhi lagayenge to error dega
//      title="YouTube video player"
//      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
//      </iframe>
//     </div>
//   )
// }

// export default VideoBackground;


import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"
// import useMovieTrailer


const VideoBackground = ({movieId}) => {

  const trailerVideo =useSelector((store)=>store.movies?.trailerVideo)

  useMovieTrailer(movieId);
  // console.log("golu",trailerVideo.key)

    

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