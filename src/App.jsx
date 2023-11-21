import './App.css';
import About from "./pages/About/About";
import Home from "./pages/MainPage/Home";
import Services from "./pages/Services/Services";
import Prices from "./pages/Prices/Prices";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/services" element={<Services/>}></Route>
            <Route exact path="/prices" element={<Prices/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
