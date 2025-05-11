import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ title, year, id, size }) => {
  return (
    <Link
      className={`${styles.cardField} ${styles[size]}`}
      to={`/project/${id}`}
    >
      <div className={styles.imgField}>
        <img alt={`${title} img`} />
      </div>
      <div className={styles.textField}>
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </Link>
  );
};

export default Card;
