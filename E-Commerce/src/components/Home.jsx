import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="home-button" onClick={() => navigate('/login')}>Iniciar Sesión</button>
      <button className="home-button" onClick={() => navigate('/register')}>Registrar</button>
    </div>
  );
};

export default Home;
