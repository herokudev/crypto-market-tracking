import './styles/App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Currencies from './components/Currencies';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/currencies">
            <Currencies />
          </Route>
          <Route path="/details/:id" component={Stats} />
          <Redirect from="/" to="/currencies" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
