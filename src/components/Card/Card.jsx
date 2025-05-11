import styles from "./Card.module.css";

const Card = ({ title, year, size }) => {
  return (
    <div className={`${styles.cardField} ${styles[size]}`}>
      <div className={styles.imgField}>
        <img alt={`${title} img`} />
      </div>
      <div className={styles.textField}>
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </div>
  );
};

export default Card;
