import './App.css';
import { Entry } from './components/Entry';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <>
    <Router>
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Entry />
          </Route>
        </Switch>
      </Router>
  </>
  );
}

export default App;
