import './App.css';
import Home from './HOME';
import Talk from './Talk';
import Info from './Info';
import Like from './Like';
import Login from './Login';
import Match from './Match';
import Near from './Near';
import Matching from './Matching';
import Attention from './Attention';
import Attention1 from './Attention1';
import Attention2 from './Attention2';
import Room from './Room';
import Theme from './Theme';
import Select from './Select';
import Problem from './problem';
import Choose from './choose';
import Choose1 from './choose1';
import Choose2 from './choose2';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Talk">
            <Talk />
          </Route>
          <Route path="/Info">
            <Info />
          </Route>
          <Route path="/Like">
            <Like />
          </Route>
          <Route path="/Matching">
            <Matching />
          </Route>
          <Route path="/Match">
            <Match />
          </Route>
          <Route path="/Near">
            <Near />
          </Route>
          <Route path="/Attention">
            <Attention />
          </Route>
          <Route path="/Attention1">
            <Attention1 />
          </Route>
          <Route path="/Attention2">
            <Attention2 />
          </Route>
          <Route path="/Room">
            <Room />
          </Route>
          <Route path="/Theme">
            <Theme />
          </Route>
          <Route path="/Select">
            <Select />
          </Route>
          <Route path="/Problem">
            <Problem />
          </Route>
          <Route path="/choose">
            <Choose />
          </Route>
          <Route path="/choose1">
            <Choose1 />
          </Route>
          <Route path="/choose2">
            <Choose2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
