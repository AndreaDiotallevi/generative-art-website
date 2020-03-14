import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Artworks from './components/Artworks/Artworks';
import Artwork from './components/Artwork/Artwork';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Artworks}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/artworks/:title' component={Artwork}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
