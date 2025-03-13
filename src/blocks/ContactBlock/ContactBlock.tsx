import React from "react";
import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa"; // Импорт иконок
import s from "./ContactBlock.module.css";

export default function ContactBlock() {
  return (
    <div className={s.contactBlock}>
      <h2 className={s.title}>Let's Connect</h2>
      <div className={s.iconsContainer}>
        <a href="https://api.whatsapp.com/send?phone=17684731383" target="_blank" rel="noopener noreferrer" className={s.icon}>
          <FaWhatsapp className={s.whatsapp} />
          <span>WhatsApp</span>
        </a>
        <a href="https://t.me/nnnastyushkaaa" target="_blank" rel="noopener noreferrer" className={s.icon}>
          <FaTelegram className={s.telegram} />
          <span>Telegram</span>
        </a>
        <a href="https://www.instagram.com/bazhana.tattoo?igsh=MW8xMmdnNWgzbXg2dQ%3D%3D" target="_blank" rel="noopener noreferrer" className={s.icon}>
          <FaInstagram className={s.instagram} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}
