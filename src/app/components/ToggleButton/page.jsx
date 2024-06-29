// ThemeToggleButton.jsx
import React, { useState, useEffect } from 'react';

const ToggleButton = () => {
  const [theme, setTheme] = useState('light');
  const [isHelloComponentLoaded, setHelloComponentLoaded] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Load theme from localStorage if it exists
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }

    // Simulate HelloComponent loading
    const timer = setTimeout(() => {
      setHelloComponentLoaded(true);
    }, 4520); // Wait for 4.520 seconds after HelloComponent has loaded

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <div>
      {isHelloComponentLoaded && (
        <button 
          onClick={toggleTheme} 
          style={{ 
            background: 'none', 
            border: 'none', 
            position: 'fixed', 
            top: '30px', 
            right: '30px', 
            zIndex: 1000, 
            borderRadius: '50%', 
            padding: 0,
            overflow: 'hidden'
          }}
        >
          <img
            src={theme === 'light' ? '/Light.png' : '/Dark.png'}
            alt="Toggle theme"
            style={{
              cursor: 'pointer',
              width: '50px',  // increased size
              height: '50px', // increased size
              borderRadius: '50%', // fully rounded
            }}
          />
        </button>
      )}
    </div>
  );
};

export default ToggleButton;