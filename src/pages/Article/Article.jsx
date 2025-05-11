import { articles } from "../../data";
import { useState } from "react";
import { motion } from "framer-motion";
import TabList from "../../components/Tab/TabList";
import List from "../../components/List/List";

import styles from "./Article.module.css";

const Article = () => {
  const tabList = ["All", "Design", "Develop", "Retrospective", "Case Study"];

  const [activeTab, setActiveTab] = useState("All");

  const tabCounts = articles.reduce((acc, article) => {
    const t = article.tag;
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});

  tabCounts["All"] = articles.length;

  const filteredLists =
    activeTab === "All"
      ? articles
      : articles.filter((p) => p.tag === activeTab);

  return (
    <div className={styles.content}>
      <TabList
        tabs={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabCounts={tabCounts}
      />
      <div className={styles.lists}>
        {filteredLists.length ? (
          filteredLists.map((list, index) => (
            <List
              key={list.title}
              title={list.title}
              date={list.date}
              id={index}
            />
          ))
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Article;
