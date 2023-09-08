import React from "react";

const SearchResult = ({ result }) => {
  return (
    <a target="_blank" href={result?.link}>
      <div className={` p-4 transition duration-300`}>
        <div className="flex items-center">
          <div>
            <h2 className="text-sm mb-2"> {result?.formattedUrl}</h2>
          </div>
        </div>

        <div
          className="text-[#1a0dab] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-lg">
            {result?.title?.split(" ")?.slice(0, 2)?.join(" ")}
          </h2>
        </div>

        <p className="text-gray-700 text-sm">{result.snippet}</p>
      </div>
    </a>
  );
};

export default SearchResult;
