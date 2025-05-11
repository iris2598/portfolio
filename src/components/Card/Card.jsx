import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = ({ title, year, id, size }) => {
  const MotionLink = motion(Link);

  return (
    <MotionLink
      className={`${styles.cardField} ${styles[size]}`}
      to={`/project/${id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className={styles.imgField}>
        <img alt={`${title} img`} />
      </div>
      <div className={styles.textField}>
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </MotionLink>
  );
};

export default Card;
