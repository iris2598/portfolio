import styles from "./Card.module.css";
import RightIcon from "../../assets/RightIcon";

const TextCard = ({ num, index, title, period, text, onClick }) => {
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
      {index < num - 1 && (
        <button className={styles.nextBtn} onClick={onClick}>
          <RightIcon />
        </button>
      )}
    </div>
  );
};

export default TextCard;
