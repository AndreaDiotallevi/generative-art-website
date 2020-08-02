import React, { useState } from "react";
import ReactGA from "react-ga";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navbar from "../Navbar/Navbar";
import PageTitle from "../PageTitle/PageTitle";
import Home from "../Home/Home";
import Artworks from "../Artworks/Artworks";
import Artwork from "../Artwork/Artwork";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

ReactGA.initialize("UA-174250672-1");
const history = createBrowserHistory();
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <Router history={history}>
        <Route
          render={(routeProps) => (
            <Navbar
              {...routeProps}
              open={menuOpen}
              onClick={() => handleMenuClick()}
            />
          )}
        />
        <Route
          render={(routeProps) => (
            <Menu
              {...routeProps}
              open={menuOpen}
              onClick={() => handleLinkClick()}
            />
          )}
        />
        <Route component={PageTitle} />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Artworks} />
        <Route path="/portfolio/:title" component={Artwork} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Footer} />
      </Router>
    </div>
  );
};

export default App;
