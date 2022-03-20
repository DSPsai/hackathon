import logo from './logo.svg';
import NavBar from './components/NavBar'
import Graph from './components/Graph'
import TopInvested from './components/TopInvested'
import Home from './pages/Home';
import './App.css';
import {
  Routes, Route,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/**
 * 
 */