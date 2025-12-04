import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
      placeholder="Search tasks..."
    />
  );
}
