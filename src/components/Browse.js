
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {



  //fetch data from tmdb api and update sore

   
  useNowPlayingMovies();  //it is a hook which we have created 

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

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