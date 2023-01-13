import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import './App.css'
import AppRouter from './routers/AppRouter';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../src/firebase/firebaseConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));

onAuthStateChanged(auth, (user) => {
  if (user) {
    
  }
});

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
