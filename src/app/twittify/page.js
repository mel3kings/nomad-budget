"use client";

import { useState } from "react";
import { Loader } from "../common/display-utils";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [responseHTML, setResponseHTML] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setResponseHTML(data?.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 p-8">
        <textarea
          className="w-full h-64 border border-gray-300 p-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Submit
        </button>
        {isLoading && <Loader />}
      </div>
      <div className="w-full h-full bg-white p-8" dangerouslySetInnerHTML={{ __html: responseHTML }}></div>
    </div>
  );
};

export default Home;
