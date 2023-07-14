import React from "react";

// Component for the search bar
function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="search name"
        onChange={searchChange}
      ></input>
    </>
  );
}

// Inline styles for the SearchBar component
const styles = {
  input: {
    borderRadius: "18px",
    width: "100%",
    backgroundColor: "#fff",
    outline: "none",
    margin: "auto",
    padding: "10px",
    border: "1px solid #cccccc",
  },
};
export default SearchBar;
