# netflix gpt

-create react app
-install tailwind css
-Header
-Routing of app
-login form
-Sign up form  // can use formik
-orm validation
- useRef hook
-Firebase setup
-Deploying our app to production
-create signup user account 
-Implement sign in user api
-created redux store with user slice






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

->on auth state change use karte hai humlog jab state chnage hota hai like signin or signup baar baar kuch activities k liye for this use docmnettion Firebase->leftside->web->mamage uerd ->get the currently signed in useer 
->it is like event listener har baar call hoga yeh autiomatically->humlog ko baar baar dispatch action nhi likhna padega yehi sab mange kar dega
