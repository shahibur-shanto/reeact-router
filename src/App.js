import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="main-div">
    <Router>
    <Switch>
    <Route exact path="/">
    <Header></Header>
    <Home></Home>
    </Route>
    <Route path="/home">
    <Header></Header>
    <Home></Home>
    </Route>
    <Route path="/team/:teamId">
    <Header></Header>
    <TeamDetails/>
    </Route>
    <Route path="*">
    <NoMatch/>
    </Route>
    
    
    </Switch>
    </Router>
    </div>
  );
}

export default App;
