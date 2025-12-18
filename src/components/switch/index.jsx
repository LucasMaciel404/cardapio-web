import { useState } from "react";
import './style.css'
export default function Switch() {
  const [value, setValue] = useState("HTML");

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="HTML"
          checked={value === "HTML"}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="name">HTML</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="React"
          checked={value === "React"}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="name">React</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Vue"
          checked={value === "Vue"}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="name">Vue</span>
      </label>
    </div>
  );
}
