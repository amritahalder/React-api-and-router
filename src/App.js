import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./style.css"
import Home from "./dog_breeds/pages/home";
import BreedsDetails from "./dog_breeds/pages/breeds_details";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/breed-details/:breed">
            <BreedsDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App