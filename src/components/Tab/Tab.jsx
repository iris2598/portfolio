import styles from "./Tab.module.css";

const Tab = ({ label, number, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <p className={styles.label}>{label}</p>
      <p className={styles.num}>{number}</p>
    </button>
  );
};

export default Tab;
