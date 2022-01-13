import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import WorkDetail from "./pages/workDetail/WorkDetail";


const App = () => {
  
  return (    
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/works/:title" component={WorkDetail} />
          </Switch>
      </Router>    
  );
}

export default App;
