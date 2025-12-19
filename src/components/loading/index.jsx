import React, { useEffect, useState } from "react";
import "./style.css";

import logoImage from "./../../assets/logo-paraiba.png";
import githubeImage from "./../../assets/github-mark.svg";
import instagramImage from "./../../assets/instagram-svgrepo-com.svg";

export default function Loading() {
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 700);
    const hideTimer = setTimeout(() => setHidden(true), 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`splash ${fade ? "fade" : ""}`}>
      <img src={logoImage} alt="Logo" className="logo" />

      <p className="username">@LucasMaciel404</p>

      <div className="social">
        <img src={githubeImage} alt="github" />
        <img src={instagramImage} alt="instagram" />
      </div>
    </div>
  );
}
