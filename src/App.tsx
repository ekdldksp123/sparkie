import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ReactQueryExample from "./components/ReactQueryExample";
import EmotionJsExample from "./components/EmotionJsExample";

type Props = {};

const queryClient = new QueryClient();

const App: React.FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryExample />
      <hr />
      <EmotionJsExample />
    </QueryClientProvider>
  );
};

export default App;
