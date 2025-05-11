import { useState } from "react";
import Tab from "./Tab";
import styles from "./Tab.module.css";

const TabList = ({ tabs, defaultIndex = 0, onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };

  return (
    <div className={styles.tabList}>
      {tabs.map((tap, index) => (
        <Tab
          key={tap.label}
          label={tap.label}
          number={tap.number}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default TabList;
