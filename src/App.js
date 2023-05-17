import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProductSingle from "./Components/ProductSingle";
import SinglePage from "./Components/SinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<ProductSingle />} />
          <Route path="/" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
