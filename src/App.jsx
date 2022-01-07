import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import Header from './components/header/Header'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work/:id" component={Work} />
      </Switch>
    </Router>
  );
}

export default App;
