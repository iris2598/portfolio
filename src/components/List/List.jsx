import { Link } from "react-router-dom";
import RightIcon from "../../assets/RightIcon";
import styles from "./List.module.css";

const List = ({ title, date, id }) => {
  return (
    <Link className={styles.list} to={`/article/${id}`}>
      <div className={styles.textField}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <RightIcon />
    </Link>
  );
};

export default List;
