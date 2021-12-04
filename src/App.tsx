import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ReactQueryExample from './components/ReactQueryExample';
import EmotionJsExample from './components/EmotionJsExample';
import DataWithExpress from './components/DataWithExpress';

type Props = {};

const queryClient = new QueryClient();

const App: React.FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryExample />
      <hr />
      <EmotionJsExample />
      <hr />
      <DataWithExpress />
    </QueryClientProvider>
  );
};

export default App;
