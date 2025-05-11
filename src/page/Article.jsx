import TabList from "../components/Tab/TabList";
import List from "../components/List/List";

import styles from "./Article.module.css";

const Article = () => {
  const tabList = [
    { label: "All", number: 0 },
    { label: "Design", number: 0 },
    { label: "Develop", number: 0 },
    { label: "Retrospective", number: 0 },
    { label: "Case Study", number: 0 },
  ];

  const lists = [];

  return (
    <div className={styles.content}>
      <TabList tabs={tabList} />
      <div className={styles.lists}>
        {lists.length ? (
          lists.map((list, index) => <List key={list.title} />)
        ) : (
          <p className={styles.notice}>아직 작성된 글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Article;
