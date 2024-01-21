import  {useEffect} from 'react'
import { signOut,onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux'
import { addUser ,removeUser} from '../utils/userSlice'
import {auth} from "../utils/firebase";
import { LOGO } from '../utils/constants';





const Header = () => {


  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

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






  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44"
        src={LOGO}
        alt="logo"/>

       { user && <div className="flex p-2">
          <img className="w-12 h-12 " alt="usericon" src={user?.photoURL}/>
          <button onClick={handleSignOut} className="font-bold text-white"> (Sign Out)</button>
        </div>

        }
        
    </div>
  )
}

export default Header;



// absolute diye kyunki we want the bg to be overlap with the bg