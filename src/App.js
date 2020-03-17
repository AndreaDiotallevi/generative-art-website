import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
      currentPage: ""
    }
  }

  isHome = () => {
    return this.state.currentPage === 'home';
  }

  handleChangePage = (e) => {
    console.log(e.target)
    let currentPage = e.target.id.split("-")[1];
    this.setState({ currentPage })
  }

  render() {
    return (
      <div id='app' className={`app ${this.isHome() ? 'component-when-home' : undefined}`}>
        <BrowserRouter>
          <Navbar onClick={this.handleChangePage}/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/artworks' exact component={Artworks}></Route>
          <Route path='/artworks/:title' component={Artwork}></Route>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
