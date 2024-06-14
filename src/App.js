import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 

function App() {

  return (
    <div className="h-hidden">
      
      <Header></Header>
      <Outlet />
      <Footer></Footer> 

    </div>
  );
}

export default App;
