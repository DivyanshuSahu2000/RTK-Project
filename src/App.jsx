import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import { fetchGif } from "./api/mediaApi";

const App = () => {
  const getGifs = async () => {
    const data = await fetchGif("cat");
    console.log(data);
  };
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
