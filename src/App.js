import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './pages/landing';
import DomainPage from './pages/domain';
import AIDomain from './pages/ai';
import MLDomain from './pages/ml';
import IOTDomain from './pages/iot';
import AboutUs from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact path='/domain' element={<DomainPage/>}></Route>
        <Route exact path='/ai' element={<AIDomain/>}></Route>
        <Route exact path='/ml' element={<MLDomain/>}></Route>
        <Route exact path='/iot' element={<IOTDomain/>}></Route>
        <Route exact path='/about' element={<AboutUs/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
