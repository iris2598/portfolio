import { articles } from "../../data";
import { useState } from "react";
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
          <p className={styles.notice}>아직 작성된 글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Article;
