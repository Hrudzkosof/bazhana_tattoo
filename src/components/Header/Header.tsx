import React from "react";
import styles from "./Header.module.css";
import logoBlack from "../../assets/images/logo-black.png";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
       <div className={styles.logoContainer}>
        <img src={logoBlack} alt="Bazhana Tattoo Logo" className={styles.logo} />
      </div>


      <nav className={styles.nav}>
        <button onClick={() => scrollToSection("about")}>About me</button>
        <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
        <button onClick={() => scrollToSection("faq")}>FAQ</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
}
