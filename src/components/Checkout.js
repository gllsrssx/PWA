import React from "react";

export function Checkout(props) {
  return (
    <>
      {props.films.length !== 0 && (
        <div className="checkoutContainer">
          <h2 className="checkoutTitle">Checkout</h2>
          <div className="checkoutItems">
            {props.films.map((film) => (
              <div className="checkoutItem">
                <h3 className="checkoutFilmName">{film.name}</h3>
                <h4 className="checkoutFilmPrice">{film.price}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
