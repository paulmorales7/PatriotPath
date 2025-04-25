import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './components/authPage';
import Home from './components/Home';

function App() {
  return (
      <Router>
          <div className="App">
              <Authentication />
              <Home />
          </div>
      </Router>
  );
}

export default App;
