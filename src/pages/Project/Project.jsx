import TabList from "../../components/Tab/TabList";
import Card from "../../components/Card/Card";
import { projects } from "../../data";

import styles from "./Project.module.css";

const Project = () => {
  const tabList = [
    { label: "All", number: 8 },
    { label: "Web", number: 2 },
    { label: "Moblie", number: 3 },
    { label: "Digital", number: 0 },
    { label: "Branding", number: 1 },
    { label: "Editorial", number: 1 },
    { label: "Visual", number: 1 },
    { label: "Study", number: 0 },
  ];

  return (
    <div className={styles.content}>
      <TabList tabs={tabList} />
      <div className={styles.projects}>
        {projects.map((card, index) => {
          const isOddLength = projects.length % 2 === 1;
          const isLast = index === projects.length - 1;

          return (
            <Card
              title={card.title}
              year={card.period}
              id={index}
              size={
                isOddLength && isLast
                  ? "lg"
                  : index % 4 === 0 || index % 4 === 3
                  ? "sm"
                  : "mid"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
