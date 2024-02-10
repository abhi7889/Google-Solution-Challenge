import React from 'react'
import LoginPage from './pages/LoginSignupPage/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import DashboardPage from './pages/DashboardPage/DashboardPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        
      </Routes>
    </Router>
  )
}
