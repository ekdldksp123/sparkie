import React from 'react';
import EmotionJsExample from '../molecules/EmotionJsExample';
import Navigation from '../molecules/Navigation';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainLayout;
