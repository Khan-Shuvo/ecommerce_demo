import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/navigatiion/TopHeader";
import Navbar from "./components/navigatiion/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Footer from "./components/navigatiion/Footer";

function App() {
  return (
    <Router>

      <Toaster></Toaster>
      {/* Header + Navbar */}
      <TopHeader />
      <Navbar />

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/shop-now" element={<h1>Shop Now</h1>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
