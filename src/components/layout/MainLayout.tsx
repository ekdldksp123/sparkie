import React from 'react';
import EmotionJsExample from '../molecules/EmotionJsExample';
import Navigation from '../Navigation';

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <EmotionJsExample />
    </>
  );
};

export default MainLayout;
