// import './App.css';
import About from "./pro_components/About";
import Contact from "./pro_components/Contact";
import Myhome from "./pro_components/Myhome";
import Mynev from "./pro_components/Mynev";
import Portfolio from "./pro_components/Portfolio";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App bg-dark text-denger">
      <Mynev/>
      {/* <Myhome/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Myhome/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
