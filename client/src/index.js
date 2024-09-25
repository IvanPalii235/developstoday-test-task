import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryListPage from "./pages/CountryListPage";
import CountryInfoPage from "./pages/CountryInfoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="/country/:code" element={<CountryInfoPage />} />
    </Routes>
  </Router>,
);
