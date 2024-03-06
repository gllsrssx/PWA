import React, { useState, useEffect } from "react";

export function Filter({ films, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasFiltered, setHasFiltered] = useState(false);

  useEffect(() => {
    if (!hasFiltered) {
      if (searchTerm === "") {
        onFilter(films);
      } else {
        const filteredFilms = films.filter((film) =>
          film.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        onFilter(filteredFilms);
      }
      setHasFiltered(true);
    }
  }, [searchTerm, films, onFilter, hasFiltered]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setHasFiltered(false);
  };

  return (
    <input
      className="filterSearch"
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchTermChange}
    />
  );
}
