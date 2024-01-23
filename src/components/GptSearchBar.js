
import openai from '../utils/openAI'
import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import {addGptMovieResult} from "../utils/gptSlice"





const GptSearchBar = () => {

  const disptach =useDispatch()

    const langkey=useSelector((store )=>store.config.lang)

    const searchText=useRef(null);

    //search movie in TMDB 

    const  searchMovieTMDB = async (movie)=>{

      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+
       movie+
      "&include_adult=false&language=en-US&page=1",
       API_OPTIONS);

      const json = await data.json()

       return json.results;
    }

    const handleGptSearchClick = async()=>{

      console.log(searchText.current.value)

      //Make an API call to GPT api and get movie results

      const gptQuery = "Act as a movie recommenadation system and suggest some movie for th query" +searchText.current.value + ". only give me names of 5 movies , comma separated like the example result given ahead  .Examp,e Result: Gaddar,Sholay,Don,Golmal,Koi milb gaya";

      const gptResults=await openai.chat.completions.create({              //yeh code wahi npm opeai se aaya hai
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices) {
      // /TOTDO :write Eroor Handling
    }

      console.log(gptResults.choices?.[0].message?.content)


      // Andaz Apna Apna, Chupke Chupke, Jaane Bhi Do Yaaro, Chhoti Si Baat, Padosan"

      const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");


      // ["Andaz Apna Apna", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Chhoti Si Baat", "Padosan"]

      //for each movie search TMDB api

      const promiseArray=gptMovies.map((movie) => searchMovieTMDB(movie)) 

      //[Promise,Promise,Promise,Promise,Promise]


      const tmdbResults= await Promise.all(promiseArray);  //take array of promise

        console.log(tmdbResults);

        disptach(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))

      



    }




  return (
    <div className=" pt-[10%] flex justify-center  ">
        <form 
        className=" w-1/2  bg-black grid grid-cols-12" 
        onSubmit={(e)=>e.preventDefault()}
        >
            <input  
             ref={searchText}
             className="p-4 m-4 col-span-9"
             type="text"
             placeholder={lang[langkey].gptSearchPlaceholder}
            />
            <button 
            className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
            >
                {lang[langkey].search}
            </button>
        </form>

    </div>
  )
}

export default GptSearchBar





