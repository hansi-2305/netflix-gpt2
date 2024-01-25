
import React, { useRef, useState } from 'react'
import Header from './Header'
// import {checkValidaData} from "../utils/validate"
import {checkValidaData} from "../utils/validate"
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_COVER, USER_PIC } from '../utils/constants';



const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  // const navigate=useNavigate();

  const dispatch=useDispatch();
  const name=useRef(null);

  const email=useRef(null);

  const  password=useRef(null);

  const handleButtonClick=()=>{



    //validate the form data

    // const message=checkValidData(name.current.value,email.current.value,password.current.value)


    const message=checkValidaData(email.current.value,password.current.value)
    // console.log(name);
    setErrorMessage(message);


    if(message) return;

    //sign-in /sign-up logic


    if(!isSignInForm)
    {
      //signup logic    authnetcation mei jaana hai or password auth mei jaake 1) create a password -based account krna hai 

      createUserWithEmailAndPassword (
        auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      updateProfile(user, {
        displayName: name.current.value,
         photoURL:USER_PIC,

      }).then(() => {

        // Profile updated!
        // ...

        
        // const {uid,email,displayName,photoURL} = auth.currentUser;
        // dispatch(
        //   addUser({ 
        //     uid:uid,
        //     email:email,
        //     displayName:displayName,
        //     photoURL:photoURL
        //   })
        // );



      
      }).catch((error) => {
        // An error occurred
        // ...

        setErrorMessage(error.message)

        
      });




      // console.log(user);
      // navigate("/browse");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
      // ..
    });

    }
    else
    {

      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //  console.log("hello",user);
          //  navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
           });

    }
  };

  const toggleSignInForm =()=>{

    setIsSignInForm(!isSignInForm)

  };
  

  return (
    <div>
        <Header/>
        <div className='absolute'>

        <img className="h-screen object-cover md:bg-cover md:w-screen"
        src={BG_COVER}
        alt="bg"/>

        </div>

        <form onSubmit={(e)=>e.preventDefault()} 
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto  right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4 ">
            
            { isSignInForm? "Sign In" : "Sign Up"}</h1>


            { !isSignInForm && (<input 
            ref={name}
          type="text" 
          placeholder=" Full Name" 
          className="p-4 my-4 w-full bg-gray-700 "
          />)

           }


          <input
          ref={email} 
          type="text" 
          placeholder="Email Adress" 
          className="p-4 my-4 w-full bg-gray-700"
          />

         
          <input 
          ref={password}
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700 "
          />

          <p className="text-lg p-2 text-red-500">{errorMessage}</p>

          <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>
          {isSignInForm? "Sign In" : "Sign Up"}
          </button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>

          {isSignInForm? "New to Netflix? Sign Up now" : " Already registered Sign In Now."}
            
          </p>

        </form>
        
    </div>
  )
}

export default Login