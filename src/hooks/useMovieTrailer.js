import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer =(movieId)=>{



    const dispatch = useDispatch();

    const trailerVideo=useSelector(store=>store.movies.trailerVideo)

    // fetch trailer video and updating the store with trailer video data

    const getMovieVideos = async() => {

        const data = await
        
        fetch("https://api.themoviedb.org/3/movie/"+ movieId+
        "/videos?language=en-US",API_OPTIONS)
        

        // fetch('https://api.themoviedb.org/3/movie/key_id/videos?language=en-US',API_OPTIONS)

        // fetch('https://api.themoviedb.org/3/movie/955916/videos?language=en-US',API_OPTIONS)

        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // use filterData for multiple trailer
        // console.log(trailer);
       dispatch(addTrailerVideo(trailer));


    };

    useEffect(() => {
       !trailerVideo && getMovieVideos();
    }, []);


}

export default useMovieTrailer;



// //MODULAR CODING 


// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addTrailerVideo } from "../utils/moviesSlice";
// import { useEffect } from "react";


// const useMovieTrailer = (movieId) => {

//     const dispatch = useDispatch();

//     // fetch trailer video and updating the store with trailer video data

//     const getMovieVideos = async() => {

//         const data = await
//         fetch("https://api.themoviedb.org/3/movie/"+
//         955916 +
//         "/videos?language=en-US",
//         API_OPTIONS);
        
        
//         // fetch(
//         // "https://api.themoviedb.org/3/movie/" +
//         //      movieId +
//         // "/videos?language=en-US",
//         //  API_OPTIONS);

//         const json = await data.json();
//         console.log(json);

//         const filterData = json.results.filter((video) => video.type === "Trailer");
//         const trailer = filterData.length ? filterData[0] : json.results[0];
//         // use filterData for multiple trailer
//         console.log(trailer);
//        dispatch(addTrailerVideo(trailer));


//     };

//     useEffect(() => {
//         getMovieVideos();
//     }, []);

// };

// export default useMovieTrailer;
