import "./App.css";
import Shops from "./pages/Shops/Shops";
import Category from "./pages/Category/Category";
import Items from "./pages/Items/Items";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shops />} />
        <Route path="/shop/:shopId" element={<Category />} />
        <Route path="/shop/:shopId/:categoryId" element={<Items />} />

        {/* <Link to={`/items/${category.id}/`}> */}
      </Routes>
    </Router>
  );
}

export default App;
