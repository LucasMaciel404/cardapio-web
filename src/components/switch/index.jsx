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
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="combos"
          checked={value === "combos"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span className="name">Combos</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="bebidas"
          checked={value === "bebidas"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span className="name">Bebidas</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="carnes"
          checked={value === "carnes"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span className="name">Porções</span>
      </label>
    </div>
  );
}
