import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import TestForm from './components/TestForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/payment" 
          element={isAuthenticated ? <Payment /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/test-form" 
          element={isAuthenticated ? <TestForm /> : <Navigate to="/login" replace />} 
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;