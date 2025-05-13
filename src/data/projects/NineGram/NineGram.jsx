import styles from "./NineGram.module.css";
import img1 from "./구그램_표지.png";
import img2 from "./구그램_문제.png";
import img7 from "./구그램_디자인.png";
import img8 from "./구그램_해결.png";
import img4 from "./구그램-1.png";
import img5 from "./구그램-2.png";
import img6 from "./구그램-3.png";
import img3 from "./구그램-4.png";

const NineGram = () => {
  const imgList = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className={styles.imgField}>
      {imgList.map((img, index) => (
        <img key={index} className={styles.img} src={img} alt="img" />
      ))}
    </div>
  );
};

export default NineGram;
