import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Arrow from "../../assets/Arrow";
import Logo from "../../assets/Logo";
import styles from "./Home.module.css";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.content}>
      <motion.div
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Link className={styles.logo} to="/project">
          <Logo width={50} height={40} color="white" />
          Portfolio
        </Link>
        Between hesitation and action, draw the lines.
      </motion.div>
      <motion.div
        className={styles.menuImg}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.arrow}>
          <Arrow />
          <Arrow />
        </div>
        <div className={styles.crosswalk}>
          <div className={`${styles.menu} ${styles.text}`}></div>
          <Link className={`${styles.menu} ${styles.about}`} to="/about">
            About
          </Link>
          <div className={`${styles.menu} ${styles.text}`}></div>
          <Link className={`${styles.menu} ${styles.project}`} to="/project">
            Project
          </Link>
          <div className={`${styles.menu} ${styles.text}`}></div>
          <Link className={`${styles.menu} ${styles.article}`} to="/article">
            Article
          </Link>
          <div className={`${styles.menu} ${styles.text}`}></div>
          {/* <div className={styles.mode}>
            <button className={styles.btn} onClick={openModal}></button>
            {modalOpen && (
              <Modal
                title="다크모드"
                text="아직 개발 중인 기능이라 조금만 기다려주세요 :)"
                open={modalOpen}
                close={closeModal}
              />
            )}
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
