import styles from "./Block.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TwoColBlock = ({ title, body, img }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <div className={styles.default}>
      <motion.div
        className={styles.smCol}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.smtitle}>{title}</div>
        <div className={styles.body}>{body}</div>
      </motion.div>
      <motion.div className={styles.lgCol}>
        {img.map((i, index) => (
          <img
            key={index}
            className={styles.lgColImg}
            src={i.src}
            alt={i.label}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TwoColBlock;
