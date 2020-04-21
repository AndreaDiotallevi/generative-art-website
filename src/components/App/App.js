import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ProjectList from "../ProjectList/ProjectList";
import Artwork from "../Artwork/Artwork";
import Artworks from "../Artworks/Artworks";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/dev" exact component={ProjectList}></Route>
        <Route path="/art" exact component={Artworks}></Route>
        <Route path="/art/:title" component={Artwork}></Route>
        <Route component={Footer}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
