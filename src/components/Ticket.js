import React, { useState } from "react";
import Modal from "react-modal";

export function Ticket(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { film, addFilm } = props;

  const handleAddFilm = () => {
    addFilm(film);
    setModalIsOpen(false);
  };

  return (
    <div className="ticketContainer">
      <button className="filmButton" onClick={() => setModalIsOpen(true)}>
        <h2 className="filmTitle">{film.name}</h2>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        contentLabel="Film Modal"
        ariaHideApp={false}
      >
        <div className="modalWindow">
          <img className="filmImage" src={film.image} alt={film.name} />
          <div className="filmName">{film.name}</div>
          {/* button color red */}
          <button className="closeButton" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
          <button className="addButton" onClick={handleAddFilm}>
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
}
