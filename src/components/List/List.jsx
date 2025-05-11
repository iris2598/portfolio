import { Link } from "react-router-dom";
import RightIcon from "../../asset/icon/RightIcon";
import styles from "./List.module.css";

const List = ({ title, date, id }) => {
  return (
    <div className={styles.list}>
      <div className={styles.textField}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <Link to={`/article/${id}`}>
        <RightIcon />
      </Link>
    </div>
  );
};

export default List;
