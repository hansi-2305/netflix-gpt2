import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_COVER } from '../utils/constants';


const GptSearch = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>

            <img className="bg-cover"
            src={BG_COVER}
            alt="bg"/>

        </div>

        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;