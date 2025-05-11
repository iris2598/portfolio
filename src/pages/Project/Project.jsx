import TabList from "../../components/Tab/TabList";
import Card from "../../components/Card/Card";
import { projects } from "../../data";

import styles from "./Project.module.css";
import { useState } from "react";

const tabList = [
  "All",
  "Web",
  "Moblie",
  "Digital",
  "Branding",
  "Editorial",
  "Visual",
  "Study",
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabCounts = projects.reduce((acc, project) => {
    const t = project.tag;
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});

  tabCounts["All"] = projects.length;

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.tag === activeTab);

  return (
    <div className={styles.content}>
      <TabList
        tabs={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabCounts={tabCounts}
      />
      <div className={styles.projects}>
        {filteredProjects.map((card, index) => {
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
