import React from 'react';
import './App.scss';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import WorkDetail from "./pages/workDetail/WorkDetail";
import { AnimatePresence } from 'framer-motion';

const App = () => {
  
  return (    
      <div className="app">        
        <AnimatePresence>          
          <Switch>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/works/:title" component={WorkDetail} />
          </Switch>
        </AnimatePresence>
      </div>
  );
}

export default App;
