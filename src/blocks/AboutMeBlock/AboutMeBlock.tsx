import React from "react";
import photoOne from "../../assets/images/photo_one.jpeg";
import s from "./AboutMeBlock.module.css";

export default function AboutMeBlock() {
  return (
    <div className={s.aboutMe}>
      <div className={s.content}>
        {/* Фото в центре */}
        <div className={s.imageBlock}>
          <img src={photoOne} alt="Tattoo artist" />
        </div>

        {/* Текст под фото */}
        <div className={s.textBlock}>
          <p>
          I'm Anastasia, a Tattoo Artist specializing in Fineline, Lettering and Minimal Tattoo.
For over a year and a half, I've been creating delicate, precise, and meaningful tattoos. I strive to make each piece unique and a true reflection of my client's personality.
</p>
<p>I creat pain, but with love 🩷 </p>
        </div>
      </div>
    </div>
  );
}
