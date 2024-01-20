import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

 const handleSignOut =()=>{

    signOut(auth).then(() => {
      // Sign-out successful.

      navigate("/")

    }).catch((error) => {
      // An error happened.

      navigate("/error")

    });
 }


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"/>

       { user && <div className="flex p-2">
          <img className="w-12 h-12 " alt="usericon" src="https://external-preview.redd.it/noWUF8-Gg-sCCAykUzAZR72zEOCCXvvlcSxmIda8AI0.jpg?auto=webp&s=b2bd313d1c53687b0c17ef7dc996004e0861522a"/>
          <button onClick={handleSignOut} className="font-bold text-white"> (Sign Out)</button>
        </div>

        }
        
    </div>
  )
}

export default Header;



// absolute diye kyunki we want the bg to be overlap with the bg