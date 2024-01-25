import  {useEffect} from 'react'
import { signOut,onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux'
import { addUser ,removeUser} from '../utils/userSlice'
import {auth} from "../utils/firebase";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguages } from '../utils/configSlice';





const Header = () => {


  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)


 const handleSignOut =()=>{

    signOut(auth).then(() => {
      // Sign-out successful.

      // navigate("/")

    }).catch((error) => {
      // An error happened.

      navigate("/error")

    });
 }


 useEffect(()=>{



  const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) 
      {


        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const {uid,email,displayName,photoURL} = user;
        dispatch(
          addUser({
             uid:uid,
             email:email,
             displayName:displayName,
             photoURL:photoURL}
             )
          );
        navigate("/browse");    
      } 
      else 
      {


        // User is signed out
       

        dispatch(removeUser());
        navigate("/");

      }
    });


    return ()=>{

      unsubscribe();   //whenevercomponenet unload /unmount we want to unsubsrcibe or deactivate onauthstate

    }

},[])

const handleGptSearchClick=()=>{

  //Toggle GPT Ssearch
  dispatch(toggleGptSearchView());


}
const handleLanguageChange =(e)=>{

  // console.log(e.target.value);

  dispatch(changeLanguages(e.target.value))


  
}






  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
        <img className="w-44 mx-auto  md:mx-0"
        src={LOGO}
        alt="logo"/>

       { user && 
       <div className=" md:flex p-2 justify-between">

        { showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white rounded-lg"
        onChange={handleLanguageChange}>

          {SUPPORTED_LANGUAGES.map ((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}
            </option>
          ))}
        
        </select>
      }



         <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
        onClick={handleGptSearchClick}>
           {showGptSearch?"HomePage":"GPT Search"}
        </button>
          <img className="hidden md:block w-12 h-12 " alt="usericon" src={user?.photoURL}/>
          <button onClick={handleSignOut} className="font-bold text-white"> (Sign Out)</button>
        </div>

        }
        
    </div>
  )
}

export default Header;



// absolute diye kyunki we want the bg to be overlap with the bg