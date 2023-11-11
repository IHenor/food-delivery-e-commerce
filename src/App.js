import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "components/nav-bar/NavBar";
import Home from "pages/home/Home";
import Footer from "components/footer/Footer";
import Restaurants from "pages/restaurants/Restaurants";
import Shop from "pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restorants" element={<Restaurants />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
