import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "components/nav-bar/NavBar";
import OrderItem from "components/order/OrderItem";
import Home from "pages/home/Home";
import Footer from "components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restorants" element={<OrderItem />} />
          <Route path="/Shop" element={<OrderItem />} />
          <Route path="/" element={<OrderItem />} />
        </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
