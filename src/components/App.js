import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path ="/items/:itemId">
            <ItemDetails />
          </Route>

          <Route exact path="/">
            <Homepage />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
