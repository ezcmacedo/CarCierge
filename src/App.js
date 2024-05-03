import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Outlet />
      <Footer></Footer> 

    </div>
  );
}

export default App;
