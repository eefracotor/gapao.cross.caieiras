import './App.css';
import NavBar from './Components/Navbar/index';
import Home from './Components/Home/index';
import Events from './Components/Events/index';
import Whatsits from './Components/Whatsits/index';
import Contac from './Components/Contact/index';
import Footer from './Components/Footer/index';
import Galery from './Components/Galery/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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
