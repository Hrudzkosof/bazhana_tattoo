import React, { useState } from "react";
import s from "./FAQ.module.css";

// Данные FAQ
const faqData = [
  {
    question: "What do I need to book a session?",
    answer: (
      <>
        <p>Write me in DM the following information:</p>
        <ul>
          <li>Your idea (or send some inspirations / my sketches).</li>
          <li>Preferred size and place on your body.</li>
          <li>Ask me about free spots or suggest your preferred day/hour.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How to prepare for the tattoo session?",
    answer: (
      <>
        <p>Before your session, make sure to:</p>
        <ul>
          <li>Avoid coffee, alcohol, and blood thinners.</li>
          <li>Wear comfortable clothes.</li>
          <li>Moisturize the tattoo area 1-2 days before.</li>
          <li>Get enough sleep and eat well.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Who shouldn't get a tattoo?",
    answer: (
      <>
        <p>Chronic contraindications:</p>
        <ul>
          <li>Blood clotting disorders (haemophilia, thrombocytopenia).</li>
          <li>Diabetes, oncology, HIV, hepatitis.</li>
          <li>Severe skin diseases (psoriasis, eczema).</li>
        </ul>
        <p>Temporary contraindications:</p>
        <ul>
          <li>Cold, fever, weak immunity.</li>
          <li>Physical damage to the tattoo area.</li>
          <li>Pregnancy, breastfeeding, menstruation.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How to take care of a new tattoo?",
    answer: (
      <>
        <h3>Healing Guide</h3>
        
        <p><strong>METHOD 1: SECOND SKIN (TATTOO FILM)</strong></p>
        <ul>
          <li>Wear the film for 3 days.</li>
          <li>Do not wet the film for the first 24 hours after the session.</li>
          <li>Ink, serum, and bubbles under the film may accumulate. This is normal, do not panic.</li>
          <li>After 3 days, remove the film under running water by stretching it.</li>
          <li>Moisturize the tattoo 3-4 times a day until fully healed.</li>
        </ul>

        <p><strong>METHOD 2: DISPOSABLE DIAPERS</strong></p>
        <ul>
          <li>For 3 days, perform the treatment 4-5 times a day.</li>
          <li>Wash with soap, apply ointment (Bepanthen), cover with a baby diaper.</li>
          <li>Continue moisturizing 3-4 times daily until fully healed.</li>
        </ul>

        <h3>Healing and Post-Healing (1-2 weeks):</h3>
        <ul>
          <li><strong>Peeling & scabs:</strong> This is normal for 7-10 days. Do not pick at them.</li>
          <li><strong>Continue moisturizing:</strong> Keep applying cream until the tattoo is fully healed.</li>
        </ul>

        <h3>What to avoid:</h3>
        <ul>
          <li><strong>Sports:</strong> Avoid intense physical activity for 7-10 days.</li>
          <li><strong>Sauna/Solarium/Swimming pool:</strong> Avoid for 6-8 weeks.</li>
          <li><strong>Sun:</strong> Avoid direct sunlight and tanning for 6-8 weeks.</li>
        </ul>
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={s.faq}>
      <h2 className={s.title}>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className={s.faqItem}>
          <button className={s.question} onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className={s.arrow}>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && <div className={s.answerBlock}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
