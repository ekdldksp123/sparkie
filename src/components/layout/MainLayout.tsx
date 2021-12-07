import React from 'react';
import Navigation from '../molecules/Navigation';
import { useLocation } from 'react-router-dom';

const MainLayout: React.FC = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Navigation />}
      {children}
    </>
  );
};

export default MainLayout;
