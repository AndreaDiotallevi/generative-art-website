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
import Menu from "../Menu/Menu";
// import Blog from "../Blog/Blog";

class App extends React.Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route
            render={(routeProps) => (
              <Navbar
                {...routeProps}
                open={this.state.menuOpen}
                onClick={() => this.handleMenuClick()}
              />
            )}
          />
          <Route
            render={(routeProps) => (
              <Menu
                {...routeProps}
                open={this.state.menuOpen}
                onClick={() => this.handleLinkClick()}
              />
            )}
          />
          <Route component={PageTitle} />
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={ProjectList} />
          <Route path="/art" exact component={Artworks} />
          <Route path="/art/:title" component={Artwork} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/blog" exact component={Blog} /> */}
          <Route component={Footer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
