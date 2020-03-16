import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './components/About/About';
import Artwork from './components/Artwork/Artwork';
import Artworks from './components/Artworks/Artworks';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    }
  }

  isHome() {
    return this.state.currentPage == 'home';
  }

  handleChangePage = (e) => {
    let currentPage = e.target.id.split("-")[1];
    this.setState({ currentPage })
  }

  render() {
    return (
      <div className={`app ${this.isHome() && 'component-when-home'}`}>
        <BrowserRouter>
          <Navbar onClick={this.handleChangePage} currentPage={this.state.currentPage}/>
          <Route path='/' exact component={Home} currentPage={this.state.currentPage}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/artworks' exact component={Artworks}></Route>
          <Route path='/artworks/:title' component={Artwork}></Route>
          <Footer currentPage={this.state.currentPage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
