// import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './components/authPage';
import Home from './components/Home';
import SideNav from './components/sideNav';

function App() {
  return (
      <Router>
          <div className="App">
              <SideNav />

              <Routes>
                <Route path="/" element={<Authentication />}/>
                <Route path="/Home" element={<Home />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
