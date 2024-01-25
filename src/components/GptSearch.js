import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_COVER } from '../utils/constants';


const GptSearch = () => {
  return (

    <>

        <div className='fixed -z-10'>

            <img className="h-screen object-cover md:bg-cover md:w-screen"
            src={BG_COVER}
            alt="bg"/>

        </div>
        <div className=" ">
          <GptSearchBar/>
          <GptMovieSuggestions/>

        </div>

    </>

        
    
  )
}

export default GptSearch;