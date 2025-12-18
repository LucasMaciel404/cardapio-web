import { useState } from "react";
import "./style.css";
export default function Switch() {
  const [value, setValue] = useState("combos");

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="combos"
          checked={value === "combos"}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="name">Combos</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="bebidas"
          checked={value === "bebidas"}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="name">Bebidas</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="porções"
          checked={value === "porções"}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="name">Porções</span>
      </label>
    </div>
  );
}
