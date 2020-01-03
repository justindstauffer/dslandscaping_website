import React from 'react';
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import CurbAppeal from './components/CurbAppeal/curbAppeal'
import HomeSection1 from './components/HomeSection1/homeSection1'
import BottomBar from './components/BottomBar/bottombar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CurbAppeal />
      <HomeSection1 />
      <BottomBar />
    </div>
  );
}

export default App;
