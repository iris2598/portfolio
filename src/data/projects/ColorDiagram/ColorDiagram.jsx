import styles from "./ColorDiagram.module.css";
import img1 from "./CD_표지.png";
import img2 from "./CD-1.png";
import img3 from "./CD-2.png";
import img10 from "./CD-3.png";
import img5 from "./CD-4.png";
import img4 from "./CD-5.png";
import img6 from "./CD-6.png";
import img8 from "./CD-7.png";
import img9 from "./CD-8.png";
import img7 from "./CD_디자인.png";

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const ColorDiagram = () => {
  return (
    <div className={styles.imgField}>
      {imgList.map((img, index) => (
        <img key={index} className={styles.img} src={img} alt="img" />
      ))}
    </div>
  );
};

export default ColorDiagram;
