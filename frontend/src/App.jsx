import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoagingPage';
import HomePage from './components/HomePage';
import GeneralNormsPage from './components/GeneralNormsPage';
export default function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoading ? (
        <LoadingPage />
      ) : currentPage === 'home' ? (
        <HomePage onNavigate={setCurrentPage} />
      ) : (
        <GeneralNormsPage onNavigate={setCurrentPage} />
      )}
    </div>
  );
}
