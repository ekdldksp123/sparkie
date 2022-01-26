import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import Router from './components/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './types/store/commentReducer';

type Props = {};

const queryClient = new QueryClient();
const store = createStore(rootReducer);

const App: React.FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store = {store}>
        <MainLayout>
          <Router />
        </MainLayout>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
