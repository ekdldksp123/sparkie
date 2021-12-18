import React from 'react';
import NavBar from '../molecules/MenuBar';
import { useLocation } from 'react-router-dom';

const MainLayout: React.FC = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      {children}
    </>
  );
};

export default MainLayout;
