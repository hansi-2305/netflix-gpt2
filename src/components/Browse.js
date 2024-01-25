
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies'


const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);



  //fetch data from tmdb api and update sore

   
  useNowPlayingMovies();  //it is a hook which we have created 
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header/>
      {
        showGptSearch?
        <GptSearch/>:
        <>           
        <MainContainer/>
        <SecondaryContainer/>
        </>

      }


      {/* react fragemnt */}
      
      
      
      

         {/*

              main container
                -video background
                -video title'
              secondary container
                -movielist*n
                 -cards*n


          */}


    </div>
  )
}

export default Browse