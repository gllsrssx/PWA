import React, { useState, useEffect } from "react";
import { sampleReviews } from "../data/data";

export function Reviews() {
  const [reviews, setReviews] = useState(
    () => JSON.parse(localStorage.getItem("reviews")) || sampleReviews
  );
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, rating, review };
    setReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setReview("");
  };

  return (
    <div className="reviewContainer">
      <h2 className="reviewTitle">Reviews</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <p>Rating:</p>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <p>Review:</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your review"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3 className="reviewName">{review.name}</h3>
            <p className="reviewRating">Rating: {review.rating}</p>
            <p className="reviewText">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
