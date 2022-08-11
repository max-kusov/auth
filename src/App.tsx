import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SuccessPage from './pages/SuccessPage';
import RegisterPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/success' element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
