import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ setShowSplash }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [setShowSplash]);

  return (
    <div className="splash-screen">
      <div className="logo"></div>
    </div>
  );
};

export default SplashScreen;
