import "./css/style.css";
import "./App.css";
import Header from "./common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Home, Shop,Contact,Page } from "./pages";
import Footer from "./common/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
