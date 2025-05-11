import Tab from "./Tab";
import styles from "./Tab.module.css";

const TabList = ({ tabs, activeTab, setActiveTab, tabCounts }) => {
  return (
    <div className={styles.tabList}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab}
          label={tab}
          number={tabCounts[tab] || 0}
          isActive={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        />
      ))}
    </div>
  );
};

export default TabList;
