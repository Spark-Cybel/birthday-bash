import React, { useState } from 'react'
import './App.css';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';

function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  return (
    <div className="App">
      {
        showHomePage ? (
          <Home />
        ) : (
          <SplashScreen
            onComplete={() => {
              setShowHomePage(true);
            }}
          />
        )
      }
    </div>
  );
}

export default App;
