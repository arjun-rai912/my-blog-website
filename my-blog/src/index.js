import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-6QDrY8GNYdM5O-GWpJ4KeC9u-1INCIo",
  authDomain: "my-react-blog-d40fd.firebaseapp.com",
  projectId: "my-react-blog-d40fd",
  storageBucket: "my-react-blog-d40fd.appspot.com",
  messagingSenderId: "304314167300",
  appId: "1:304314167300:web:fb7d5e071021ae5aeb8551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
