import React from "react";
import "./Tori.css";

const Tori = () => {
  return (
    <div className="tori">
      <input type="text" value="Hakusana ja/tai postinumero" />
      <select name="what">
        <option id="1">Kaikki osastot</option>
      </select>
      <select name="where">
        <option id="1">Koko Suomi</option>
      </select>
      <input type="checkbox" name="how" />
      <span>Myydään</span>
      <input type="checkbox" name="how" />
      <span>Ostetaan</span>
      <input type="checkbox" name="how" />
      <span>Vuokrataan</span>
      <input type="checkbox" name="how" />
      <span>Halutaan vuokrata</span>
      <input type="checkbox" name="how" />
      <span>Annetaan Tallenna haku</span>
      <button>Hae</button>
    </div>
  );
};

export default Tori;
