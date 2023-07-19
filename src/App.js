import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Whatsits from './Components/Whatsits';
import Contac from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Galery from './Components/Galery';


function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          {/* <NavBar /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/whatsits" element={<Whatsits />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/galery" element={<Galery />} />
          <Route path="/contato" element={<Contac />} />
        </Routes>
      </Router>
      {/* <Home />
      <Whatsits />
      <Events />
      <Contac /> */}
      <Footer /> 

    </div>
  );
}

export default App;
