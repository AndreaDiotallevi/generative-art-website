import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Artwork from './components/Artwork/Artwork';
import Artworks from './components/Artworks/Artworks';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route path='/' exact component={Home}></Route>
        <Route path='/art' exact component={Artworks}></Route>
        <Route path='/art/:title' component={Artwork}></Route>
        <Route component={Footer}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
