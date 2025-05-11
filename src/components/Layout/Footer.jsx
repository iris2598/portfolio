import styles from "./Layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        Contact
        <p className={styles.email}>
          iris2598@naver.com
          <br />
          jeong259812@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
