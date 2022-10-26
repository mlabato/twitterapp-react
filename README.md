# Front end service for Twitter App 

# Introduction
Recently I took an avid interest on APIs and on becoming familiar to its documentation. Following that direction, I chose Twitter API, explored its endpoint and thought about building an app with them.

## Overview
The front end service makes two HTTP request to the back end endpoints, one to obtain the user ID and the other to retrieve user's information.  
To avoid re-rendering both request are handled using useEffect React hook.  

Once obtained, user ID is stored in localStorage(). The ID is used to retrieve user's data, which is stored in the app context, created with useContext React hook. 
Routing and navigation is carried out with React Router v6 and state handling (such as loading, form's validation, and response's status) is executed with useState React hook.  

Additionally, Tailwindd.css for the styling and React-icons for the icons.  

## Framework
- React

## Extra libraries
- Tailwind CSS
- React-Router-dom


## Run this sample!
- Run npm install
- Clone this repository
- Run npm start

The app was deployed using Vercel and can be found in the following link:  
https://twitter-app-react.vercel.app/
