import React, { useState, useEffect } from "react";
import { HomePage } from "../pages/HomePage";
import { MoviesPage } from "../pages/MoviesPage";
import { FaqPage } from "../pages/FaqPage";
import { ContactUsPage } from "../pages/ContactPage";
import { SocialsPage } from "../pages/SocialsPage";
import { ReviewsPage } from "../pages/ReviewsPage";
import { DonatePage } from "../pages/DonatePage";
import { ErrorPage } from "../pages/ErrorPage";
import { AddMoviePage } from "../pages/AddMoviePage";

export function Navigation() {
  const [currentComponent, setCurrentComponent] = useState(
    localStorage.getItem("currentComponent") || "home"
  );

  useEffect(() => {
    localStorage.setItem("currentComponent", currentComponent);
  }, [currentComponent]);

  function renderComponent() {
    switch (currentComponent) {
      case "home":
        return <HomePage />;
      case "tickets":
        return <MoviesPage />;
      case "addMovie":
        return <AddMoviePage />;
      case "faq":
        return <FaqPage />;
      case "contactUs":
        return <ContactUsPage />;
      case "socials":
        return <SocialsPage />;
      case "reviews":
        return <ReviewsPage />;
      case "donate":
        return <DonatePage />;
      default:
        return <ErrorPage setCurrentComponent={setCurrentComponent} />;
    }
  }

  return (
    <div className="navigationContainer">
      <nav className="navigationBar">
        {currentComponent !== "home" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("home")}
          >
            Home
          </button>
        )}
        {currentComponent !== "tickets" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("tickets")}
          >
            Tickets
          </button>
        )}
        {currentComponent !== "addMovie" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("addMovie")}
          >
            Add Movie
          </button>
        )}
        {currentComponent !== "faq" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("faq")}
          >
            FAQ
          </button>
        )}
        {currentComponent !== "contactUs" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("contactUs")}
          >
            Contact
          </button>
        )}
        {currentComponent !== "socials" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("socials")}
          >
            Socials
          </button>
        )}
        {currentComponent !== "reviews" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("reviews")}
          >
            Reviews
          </button>
        )}
        {currentComponent !== "donate" && (
          <button
            className="navigationButton"
            onClick={() => setCurrentComponent("donate")}
          >
            Donate
          </button>
        )}
      </nav>
      {renderComponent()}
    </div>
  );
}
