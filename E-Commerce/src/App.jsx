// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const handleRefresh = () => {
      setShowSplash(true);
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        {showSplash ? (
          <SplashScreen setShowSplash={setShowSplash} />
        ) : (
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
