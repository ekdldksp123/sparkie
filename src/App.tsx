import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import MainLayout from './components/layout/MainLayout';

type Props = {};

const queryClient = new QueryClient();

const App: React.FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
};

export default App;
