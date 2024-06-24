import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Footer from "./Component/Footer/Footer"
import './tailwind.css';
import Home from './Component/Main/Home';



function App() {
  return (
    <div className=" ">
      <Router>
        {/* <Navbar /> */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />



          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
