import React, { useState, useEffect } from "react";
import { Ticket } from "./Ticket";
import { Cart } from "./Cart";
import { Filter } from "./MovieFilter";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../services/firebase";

export function TicketMenu() {
  const [films, setFilms] = useState([]);
  const [originalFilms, setOriginalFilms] = useState([]);
  const [selectedFilms, setSelectedFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, "movies"));
      const fetchedFilms = querySnapshot.docs.map((doc) => doc.data());
      setFilms(fetchedFilms);
      setOriginalFilms(fetchedFilms);
    };
    fetchFilms();
  }, []);

  function addFilm(film) {
    setSelectedFilms([...selectedFilms, film]);
  }

  function handleFilteredFilms(filteredFilms) {
    setFilms(filteredFilms);
  }

  return (
    <>
      <br />
      <Filter films={originalFilms} onFilter={handleFilteredFilms} />
      <div className="ticketMenuContainer">
        <div className="filmsContainer">
          {films.map((film, index) => (
            <Ticket film={film} addFilm={addFilm} key={index} />
          ))}
        </div>
        {selectedFilms.length !== 0 && <Cart films={selectedFilms} />}
      </div>
    </>
  );
}
