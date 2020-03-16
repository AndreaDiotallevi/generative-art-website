import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './components/About/About';
import Artwork from './components/Artwork/Artwork';
import Artworks from './components/Artworks/Artworks';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/artworks' exact component={Artworks}></Route>
        <Route path='/artworks/:title' component={Artwork}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
