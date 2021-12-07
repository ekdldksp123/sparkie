import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import Router from './components/Router';

type Props = {};

const queryClient = new QueryClient();

const App: React.FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
    </QueryClientProvider>
  );
};

export default App;
