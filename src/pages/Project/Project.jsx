import TabList from "../../components/Tab/TabList";
import Card from "../../components/Card/Card";
import { projects } from "../../data";
import { motion } from "framer-motion";

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

  const projectNum = filteredProjects.length;

  return (
    <div className={styles.content}>
      <TabList
        tabs={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabCounts={tabCounts}
      />
      <div className={styles.projects}>
        {projectNum === 0 ? (
          <motion.div
            className={styles.notice}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            아직 준비 중이에요.
            <br />
            조금만 기다려 주세요 :)
          </motion.div>
        ) : (
          filteredProjects.map((card, index) => {
            const isOddLength = projectNum % 2 === 1;
            const isLast = index === projectNum - 1;

            return (
              <Card
                img={card.mainImg}
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
          })
        )}
      </div>
    </div>
  );
};

export default Project;
