import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './components/authPage';

function App() {
  return (
      <Router>
          <div className="App">
              <Authentication />
          </div>
      </Router>
  );
}

export default App;
