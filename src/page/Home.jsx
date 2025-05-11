import TabList from "../components/Tab/TabList";

const Home = () => {
  const tabList = [
    { label: "All", number: 7 },
    { label: "All", number: 2 },
    { label: "All", number: 1 },
    { label: "All", number: 1 },
    { label: "All", number: 0 },
  ];

  return (
    <div>
      <TabList tabs={tabList} />
    </div>
  );
};

export default Home;
