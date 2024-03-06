import React from "react";

export function Cart(props) {
  const totalPrice = props.films.reduce((total, film) => total + film.price, 0);

  return (
    <React.Fragment>
      {props.films.length !== 0 && (
        <div className="cartContainer">
          <h2 className="cartTitle">Cart</h2>
          <div className="cartItems">
            {props.films.map((film, index) => (
              <React.Fragment key={index}>
                <div className="cartItem">
                  <h3 className="cartFilmName">{film.name}</h3>
                  <h4 className="cartFilmPrice">{film.price}</h4>
                </div>
              </React.Fragment>
            ))}
          </div>
          <h4 className="cartTotal">Total: {totalPrice}</h4>
        </div>
      )}
    </React.Fragment>
  );
}
