// // import { createSlice } from "@reduxjs/toolkit";



// // const moviesSlice=createSlice({
// //     name:"movies",
// //     initalState:{
// //         nowPlayingMovies:null,
// //     },
// //     reducers:{
// //         addNowPlayingMovies:(state,action)=>{
// //             state.nowPlayingMovies=action.payload
// //         }
// //     }

// // });

// // export const{ addNowPlayingMovies }=moviesSlice.actions;

// // export default moviesSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
       trailerVideo:null,
       popularMovies:null,
       topRatedMovies:null,
       upcomingMovies:null,
       movieIdNo:1,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        addTrailerVideo:(state,action)=>{

            state.trailerVideo=action.payload;


        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addMovieId:(state,action)=>{
            state.movieIdNo=action.payload;

        }

        
        
    }

});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addMovieId} = moviesSlice.actions;

export default moviesSlice.reducer;



