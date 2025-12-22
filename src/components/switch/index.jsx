import { useState } from "react";
import "./style.css";

export default function Switch({ onChange }) {
  const [value, setValue] = useState("combos");

  function handleChange(newValue) {
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <div className="radio-inputs">
      <div
        className={`radio ${value === "combos" ? "active" : ""}`}
        onClick={() => handleChange("combos")}
      >
        <span className="name">Combos</span>
      </div>

      <div
        className={`radio ${value === "bebidas" ? "active" : ""}`}
        onClick={() => handleChange("bebidas")}
      >
        <span className="name">Bebidas</span>
      </div>

      <div
        className={`radio ${value === "carnes" ? "active" : ""}`}
        onClick={() => handleChange("carnes")}
      >
        <span className="name">Porções</span>
      </div>
    </div>
  );
}
