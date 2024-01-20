import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux'
import { addUser ,removeUser} from '../utils/userSlice'


const Body = () => {


    const dispatch=useDispatch();
    // const navigate=useNavigate()

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>

        },
    ])


    useEffect(()=>{



        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user

              const {uid,email,displayName,photoURL} = user.uid;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            //   navigate("/browse");

              // ...
            } else {
              // User is signed out
              // ...

              dispatch(removeUser());
            //   navigate("/");



            }
          });

    },[])


  return (
    <div>


        {/* <Login/>
        <Browse/> */}
        {/* isko esse likhne k jagh j=niche wala tareeka use karte hai */}
        
        <RouterProvider router={appRouter}/>




    </div>
  )
}

export default Body