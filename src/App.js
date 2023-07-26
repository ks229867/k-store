import Navbar from "./components/Navbar";
import BestSellers from "./pages/BestSellers";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import SearchedBooks from "./pages/SearchedBooks";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bestsellers" element={<BestSellers />} />
      <Route path="/search/:name" element={<SearchedBooks />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>  
    </div>
  );
}

export default App;
