import { Routes, Route, BrowserRouter } from "react-router-dom";
import SiteHeader from "components/SiteHeader";
import React from "react";
import "./App.css";
import Homepage from "pages/Homepage";
import Category from "pages/Category";
import ReviewDetails from "pages/ReviewDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="category" element={<Category />} />
          <Route path="review-details" element={<ReviewDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
