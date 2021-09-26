import React from "react";
import tori from "./tori.png";
import "./App.css";
import Tori from "./Tori";

function App() {
  return (
    <div>
      <img src={tori} className="App-logo" alt="Tori" />
      <Tori />
    </div>
  );
}

export default App;
