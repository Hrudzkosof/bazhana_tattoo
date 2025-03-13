import React from "react";
import s from "./Reviews.module.css";
import work1 from "../../assets/images/work1.jpeg";
import work2 from "../../assets/images/work2.jpeg";
import work3 from "../../assets/images/work3.jpeg";
import work4 from "../../assets/images/work4.jpeg";
import work5 from "../../assets/images/work5.jpeg";
import work6 from "../../assets/images/work6.jpeg";
import work7 from "../../assets/images/work7.jpeg";
import work8 from "../../assets/images/work8.jpeg";

const images = [work1, work2, work3, work4, work5, work6, work7, work8];

export default function Reviews() {
  return (
    <div className={s.reviews}>
      <h2 className={s.title}>Portfolio</h2>
      <div className={s.gallery}>
        {images.map((image, index) => (
          <div key={index} className={s.imageWrapper}>
            <img src={image} alt={`Tattoo work ${index + 1}`} className={s.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
