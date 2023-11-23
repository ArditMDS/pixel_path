import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import './App.css';
import homepage from "./pages/homepage";
import list from "./pages/list";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/acceuil" element={homepage()}></Route>
        <Route path="/list" element={list()}></Route>
      </Routes>
    </Router>
  );
}

export default App;
