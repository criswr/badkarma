import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWuBNYKPJVpmERYGz3P9VmxAv0mWFApyw",
  authDomain: "badkarma-67981.firebaseapp.com",
  projectId: "badkarma-67981",
  storageBucket: "badkarma-67981.appspot.com",
  messagingSenderId: "80006441341",
  appId: "1:80006441341:web:6c4e5f67bdfec01d460414"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

