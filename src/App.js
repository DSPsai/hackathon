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
import Projects from './pages/Projects';
import { useStyles } from './JsStyles/Styles';
import Temp from './components/Temp';
import SingleProject from './pages/SingleProject';
import CollegeLogin from './pages/CollegeLogin';
import CollegeSignup from './pages/CollageSignuo';
import CollegeRegistration from './pages/CollegeRegistration';
import { useEffect } from 'react';

function App() {
  const classes = useStyles.light;
  return (<>
    <NavBar />
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home styles={classes} />} />
          <Route exact path="/temp" element={<Temp styles={classes} />} />
          <Route exact path="/Projects" element={<Projects styles={classes} />} />
          <Route exact path="/Login/College" element={<CollegeLogin title='College' styles={classes} />} />
          <Route exact path="/Login/Investor" element={<CollegeLogin title='Investor' styles={classes} />} />
          <Route exact path="/SignUp/College" element={<CollegeSignup title='College' styles={classes} />} />
          <Route exact path="/SignUp/Investor" element={<CollegeSignup title='Investor' styles={classes} />} />
          <Route exact path="/Projects/SingleProject" element={<SingleProject styles={classes} />} />
          <Route exact path="/Collage-Register" element={<CollegeRegistration styles={classes} />} />
          {/* <Route exact path="/Projects/SingleProject/:id" element={<SingleProject styles={classes} />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
/**
 * 
 */