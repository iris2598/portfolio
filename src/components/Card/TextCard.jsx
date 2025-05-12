import styles from "./Card.module.css";
import RightIcon from "../../assets/RightIcon";
import { useState } from "react";

const TextCard = ({ num, index, title, period, text }) => {
  const [current, setCurrent] = useState(index);
  const onClick = () => {
    setCurrent(index + 1);
  };

  return (
    <div className={styles.textCard}>
      <div className={styles.content}>
        <div className={styles.titleField}>
          <div className={styles.title}>{title}</div>
          <div className={styles.period}>{period}</div>
        </div>
        <ul className={styles.text}>
          {text.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
      {num >= 2 && index < num && (
        <button className={styles.nextBtn} onClick={onClick}>
          <RightIcon />
        </button>
      )}
    </div>
  );
};

export default TextCard;
