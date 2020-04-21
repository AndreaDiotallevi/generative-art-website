import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import PageTitle from "../PageTitle/PageTitle";
import Home from "../Home/Home";
import ProjectList from "../ProjectList/ProjectList";
import Artworks from "../Artworks/Artworks";
import Artwork from "../Artwork/Artwork";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route component={PageTitle}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/portfolio" exact component={ProjectList}></Route>
        <Route path="/art" exact component={Artworks}></Route>
        <Route path="/art/:title" component={Artwork}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route component={Footer}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
