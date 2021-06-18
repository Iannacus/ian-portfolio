import './styles/App.css';
import './styles/bg.css';
import Bubbles from './components/Bubbles';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Bubbles />
    </div>
  );
}

export default App;
