import Close from "../../assets/Close";
import styles from "./Modal.module.css";

const Modal = ({ title, text, open, close }) => {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className={styles.modalBox}>
          <div className={styles.top}>
            <div className={styles.title}></div>
            <Close close={close} />
          </div>
          <div className={styles.text}></div>
          {/* <div className={styles.btnField}>
          <button className={styles.btn} onClick={onClick}></button>
      </div> */}
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
