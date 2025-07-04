import styles from "./About.module.css";
import TabList from "../../components/Tab/TabList";
import { useState, useEffect } from "react";
import { aboutInfo } from "../../data";
import TextCard from "../../components/Card/TextCard";
import Photo from "../../assets/Photo.png";

const tabList = [
  "Education",
  "Work Experience",
  "Experience",
  "Academic Paper",
  "Skill & Tool",
];
const About = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const tabCounts = aboutInfo.reduce((acc, info) => {
    const t = info.tag;
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});

  const filteredInfo = aboutInfo.filter((p) => p.tag === activeTab);

  const [current, setCurrent] = useState(0);
  const onClick = () => {
    setCurrent(current + 1);
    console.log("클릭");
  };

  useEffect(() => {
    setCurrent(0); // 탭 바뀌면 index 초기화!
  }, [activeTab, , filteredInfo.length]);

  const infoNum = filteredInfo.length;
  const firstInfo = filteredInfo[current] || {};

  return (
    <div className={styles.content}>
      <div className={styles.titleField}>
        <div className={styles.name}>
          <div className={styles.eng}>Jeong Ah young</div>
          <div className={styles.kor}>정아영</div>
        </div>
        <div className={styles.contact}>
          iris2598@naver.com
          <br />
          jeong259812@gmail.com
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.textField}>
          <TabList
            tabs={tabList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabCounts={tabCounts}
          />
          <TextCard
            num={infoNum}
            index={current}
            title={firstInfo.title || ""}
            period={firstInfo.period || ""}
            text={firstInfo.text || []}
            onClick={onClick}
          />
        </div>
        <img className={styles.img} src={Photo} alt="사진" />
      </div>
    </div>
  );
};

export default About;
