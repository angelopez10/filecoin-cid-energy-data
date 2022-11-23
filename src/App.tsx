import React from "react";
import { CidAPI } from "./api/cid";

function App() {
  CidAPI.get(
    "bafybeihrfvw2onvcosl4psa7qgmr563amxpdqu2ze6xx6uwp5hlafr3qpq"
  ).then((res) => console.log(res));
  return <div>Hola Buenas!</div>;
}

export default App;
