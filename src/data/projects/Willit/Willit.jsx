import styles from "./Willit.module.css";
import img1 from "./Willit_표지.png";
import img2 from "./Willit_문제.png";
import img3 from "./Willit_디자인.png";
import img4 from "./Willit_해결.png";
import img5 from "./Willit-3.png";
import img6 from "./Willit-6.png";
import img7 from "./Willit-7.png";

const Willit = () => {
  const imgList = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div className={styles.imgField}>
      {imgList.map((img, index) => (
        <img key={index} className={styles.img} src={img} alt="img" />
      ))}
    </div>
  );
};

export default Willit;
