import React from "react";
import { Error } from "../components/Error";

export function ErrorPage({ setCurrentComponent }) {
  return (
    <div>
      <Error setCurrentComponent={setCurrentComponent} />
    </div>
  );
}
