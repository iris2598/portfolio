import styles from "./List.module.css";

const List = ({ title, date, to }) => {
  const onClick = () => {};

  return (
    <div className={styles.list}>
      <div className={styles.textField}>
        {title}
        {date}
      </div>
      <button className={styles.iconField} onClick={onClick}>
        icon
      </button>
    </div>
  );
};

export default List;
