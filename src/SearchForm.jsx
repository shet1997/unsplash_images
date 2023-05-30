import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (searchValue == "") return;
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <h1 className="title">unsplash images</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
