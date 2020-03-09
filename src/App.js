import React from "react";
import { Switch, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';
import About from './pages/About.js';
import Details from './pages/Details.js';
import './App.css';

const ErrorPage = () => {
  return (
    <div className="body">
      <div className="error-text" >
        <h1> 404: Page Not Found :(</h1>
      </div>
      {/* <img src={ErrorGif} className="error-gif" /> */}
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path='/' exact component={Portfolio} />
      <Route exact path='/about' exact component={About} />
      <Route exact path='/:id' exact component={Details} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
 