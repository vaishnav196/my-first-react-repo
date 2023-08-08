
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Coverage from './Components/Coverage';
import Qualatative from './Components/Qualatative';
import Others from './Components/Others';
import Quantative from './Components/Quantative';
import Panel from './Components/Panel';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Industry from './Components/Industry';


function App() {
  return (
   <Router>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about/' element={<About />}></Route>
        <Route path='coverage/' element={<Coverage />}></Route>
        <Route path='Qualatative/' element={<Qualatative />}></Route>
        <Route path='Others/' element={<Others />}></Route>
        <Route path='Quantative/' element={<Quantative />}></Route>
        <Route path='Panel/' element={<Panel/>}></Route>
        <Route path='Contact/' element={<Contact/>}></Route>
        <Route path='Industry/' element={<Industry/>}></Route>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
