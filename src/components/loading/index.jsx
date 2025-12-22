import { useEffect, useState } from "react";
import "./style.css";

import logoImage from "./../../assets/logo-paraiba.png";
import githubImage from "./../../assets/github-mark.svg";
import instagramImage from "./../../assets/instagram-svgrepo-com.svg";

export default function Loading() {
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 1800);
    const hideTimer = setTimeout(() => setHidden(true), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`splash ${fade ? "fade" : ""}`}>
      <img src={logoImage} alt="Costelão do Paraíba" className="logo" />

      <p className="username">
        criado por:
        <br />
        <strong>@LucasMaciel404</strong>
      </p>

      <div className="social">
        <img src={githubImage} alt="GitHub" />
        <img src={instagramImage} alt="Instagram" />
      </div>
    </div>
  );
}
