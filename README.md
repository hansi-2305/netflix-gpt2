# netflix gpt

-create react app
-install tailwind css
-Header
-Routing of app
-login form
-Sign up form  // can use formik
-form validation
- useRef hook
-Firebase setup
-Deploying our app to production
-create signup user account 
-Implement sign in user api
-created redux store with user slice
-Implemented sign out
-update profile api call

bugFix- sign up and profile update
BugFix- if the user is not logged in redirect to  login page and vice versa 

-unsbscribed to the onAuthStateChanged callback
-Add harc coded values is constant file

TMDB -> create account ->left side api ->find api key and api token

-registr TMDB API & create an app & get acess token
-get data from TMDB now playing and get the list

-put this data in redux store

-custoom hooks for now playing movies
-update storewith movies data
-plannig the main conatiner & secondary container
-fetch data for trailer video
-update store with trailer video data
-embedded the youtube vdo and make it auto play
-added tailind css to make it more beautiful
-build secondary components
-Build movie list
-build movie card
-TMDB image cdn url
-made the browse pafe amazing with T CSS
-usePopularMovies Custom hook
-GPT search page
-gpt search bar
-mutilinugual feature in our app(bonus)
-integrate gpt apis

platform.openAI.com ->see in constnts page written
->mpm opnai ->install open ai ->







#Features

-login/Sign Up
  -Sign in/ Sign Up form
  -redirect to browse page

-Browse(after authentication)
 -Header
 -Main movie
    -trailer in bg
    -title & description
    -Movie Suggestions
    -movielists *n

-NetflixGPT
  -Search Bar
  -Movie Suggestions





-> npm i -D @reduxjs/toolkit
->npm i react-redux

-> sabse pehle appstore banayenge ->configure store banayenge->wih reducer

->userSlice ->createSlice in it with name and initial state along with reducers function i.e adduser and re,=move uer

->provide the store ko ekdam root mei i.e is App.js

->on auth state change use karte hai humlog jab state chnage hota hai like signin or signup baar baar kuch activities k liye for this use docmnettion 
Firebase->leftside->web->mamage uerd ->get the currently signed in useer 
->it is like event listener har baar call hoga yeh autiomatically->humlog ko baar baar dispatch action nhi likhna padega yehi sab mange kar dega
