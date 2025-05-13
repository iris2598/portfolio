import styles from "./Rebloom.module.css";
import img1 from "./갱년기-1.png";
import img2 from "./갱년기.png";
import img3 from "./갱년기-2.png";
import img4 from "./갱년기-3.png";
import img5 from "./갱년기-4.png";
import img6 from "./갱년기-5.png";
import img7 from "./갱년기-6.png";
import img8 from "./갱년기-7.png";
import img9 from "./갱년기-8.png";

const Rebloom = () => {
  const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className={styles.imgField}>
      {imgList.map((img, index) => (
        <img key={index} className={styles.img} src={img} alt="img" />
      ))}
    </div>
  );
};

export default Rebloom;
