import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 10 seconds (10000 ms)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div className="w-full h-full">
      {showSplash ? <SplashScreen /> : <HomePage />}
    </div>
  );
};

export default App;