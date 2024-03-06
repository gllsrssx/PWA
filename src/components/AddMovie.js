import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestoreDB } from "../services/firebase";

export function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMovie = { name, price, genre, length, image };
    await addDoc(collection(firestoreDB, "movies"), newMovie);
    setName("");
    setPrice(0);
    setGenre("");
    setLength(0);
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Movie name:</p>
        <input
          placeholder="Movie Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        <p>Price:</p>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
      </label>
      <label>
        <p>Genre:</p>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </label>
      <label>
        <p>Length:</p>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value))}
          required
        />
      </label>
      <label>
        <p>Image:</p>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}
