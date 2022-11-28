import React from "react";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src="/public/assets/imagens/LogoIcon/facebook.svg" alt="Facebook" />
      <img src="/public/assets/imagens/LogoIcon/instagram.svg" alt="" />
      <img src="/public/assets/imagens/LogoIcon/twitter.svg" alt="" />
    </footer>
  );
}
