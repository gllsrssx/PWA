import React from "react";
import Faq from "../components/Faq";

const faqs = [
  {
    question: "How do I rent a movie?",
    answer:
      'Ga naar onze bibliotheek om een film te huren. Klik op de film die je wilt huren en daarna op de knop "Huur". Zo voeg je de film toe aan je winkelwagen. Als je alle films hebt geselecteerd die je wilt huren, ga je naar de kassa om je transactie te voltooien.',
  },
  {
    question: "How do I return a rented movie?",
    answer:
      'Voor het teruggeven van een gehuurde film, log je in op je account en ga je naar je verhuurgeschiedenis. Selecteer de film die je wilt teruggeven en klik op de "Teruggeven" knop.',
  },
  {
    question: "What is the rental period?",
    answer:
      "De huurperiode is de hoeveelheid tijd dat je hebt om een gehuurde film te kijken voordat deze terug moet worden gegeven. De huurperiode voor onze films is meestal 48 uur.",
  },
];

export function FaqPage() {
  return <Faq faqs={faqs} />;
}

export default FaqPage;
