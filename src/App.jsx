import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import WorkDetail from "./pages/workDetail/WorkDetail";

const App = () => {
  return (
    <Router>
      <div className="hero">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work/:id" component={WorkDetail} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
