import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet, Route, Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {

  return (

    <div className="App bg-blackfigma bg-opacity-90 min-h-screen">

      <Header></Header>
      <Outlet />
      <Footer></Footer>

    </div>

  );
}

export default App;
