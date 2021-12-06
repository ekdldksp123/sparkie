import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

type Props = {};

const ReactQueryExample: React.FC<Props> = () => {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    axios("https://api.github.com/repos/tannerlinsley/react-query")
  );

  if (isLoading) return <div>로오딩..</div>;
  if (error) return <div>에러당</div>;

  return (
    <div>
      <h1>{data.data.name}</h1>
      <p>{data.data.description}</p>
      <strong>👀 {data.data.subscribers_count}</strong>{" "}
      <strong>✨ {data.data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.data.forks_count}</strong>
    </div>
  );
};

export default ReactQueryExample;
