import { useNavigate } from "react-router-dom";
import React from "react";
import searchIcon from "./search.png"

const SearchBar = ({ value, searchQuery, setSearchQuery, handleSearch }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  const hanldeChangeQuery = (value) => {
    setSearchQuery(value);
    if (value?.length) navigate(`/?keyword=${value}`);
    else navigate("/");
  };

  return (
    <>
      <form
        className={`sticky ${
          searchQuery ? "top-0 " : "top-[calc(50%-90px)]"
        } z-50 w-full py-5 bg-white`}
        onSubmit={handleSubmit}
      >
        <p
          className={`z-50 w-full text-2xl capitalize font-bold text-[#000000bd] mb-1 text-center`}
        >
          {window.location.hostname?.replace(".com", "")}
        </p>
        <div className="flex items-center justify-between relative">
          <input
            className="w-full rounded-l-3xl p-4 py-3 h-12 border border-gray-300 text-black outline-none"
            type="text"
            placeholder="Search..."
            onChange={(e) => hanldeChangeQuery(e.target.value)}
            value={value}
          />
          <button type="button" onClick={clearSearchQuery}>
            <div className="w-4 h-.5 border border-gray-400 rotate-45 absolute top-1/2 right-16"></div>
            <div className="w-4 h-.5 border border-gray-400 -rotate-45 absolute top-1/2 right-16"></div>
          </button>
          <button
            className="text-white rounded-r-3xl p-4 h-12 w-14 relative right-[1px] border border-gray-300"
            type="submit"
          >
            <img src={searchIcon} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
