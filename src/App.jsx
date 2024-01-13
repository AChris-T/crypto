import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import logoIcon from "../src/assets/Images/logoImage.png";
import AboutCoin from "./pages/collaboration/AboutCoin";
import Founder from "./pages/founder/Founder";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className=" bg-slate-700 p-4 h-[100vh] overflow-x-auto">
      <Navbar />
      <div className="flex flex-col align-middle items-center justify-center mt-6">
        <img src={logoIcon} alt="logo" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaboration" element={<AboutCoin />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
