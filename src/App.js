import './styles/App.css';
import './styles/bg.css';
import Bubbles from './components/Bubbles';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/portfolio' >
            <Portfolio />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Bubbles />
    </div>
  );
}

export default App;
