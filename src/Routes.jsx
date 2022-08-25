/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from './Pages/StartPage';

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}