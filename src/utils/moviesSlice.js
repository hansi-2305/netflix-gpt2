// import { createSlice } from "@reduxjs/toolkit";



// const moviesSlice=createSlice({
//     name:"movies",
//     initalState:{
//         nowPlayingMovies:null,
//     },
//     reducers:{
//         addNowPlayingMovies:(state,action)=>{
//             state.nowPlayingMovies=action.payload
//         }
//     }

// });

// export const{ addNowPlayingMovies }=moviesSlice.actions;

// export default moviesSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addTrailerVideo:(state,action)=>{

            state.TrailerVideo=action.payload;


        }
        
        
    }

});

export const {addNowPlayingMovies,addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;