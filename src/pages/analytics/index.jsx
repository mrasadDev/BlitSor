import { useState } from "react";
import { Text, Divider, Tabs } from "@mantine/core";
import SimplePage from "../../components/SimplePage";
import classes from "../../styles/Tabs.module.css";
import Overview from "./overview";
import "./style.css";
import Content from "./content";

const index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <>
      <SimplePage>
        <Text className="page-title mb-3">Channel Analytics</Text>
        <Divider className="mb-3" />
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onChange={setActiveTab}
          classNames={classes}
        >
          <Tabs.List className="mb-25">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="content">Content</Tabs.Tab>
            <Tabs.Tab value="achievements">Achievements</Tabs.Tab>
            <Tabs.Tab value="research">Research</Tabs.Tab>
            <Tabs.Tab value="stream">Stream</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <Overview />
          </Tabs.Panel>
          <Tabs.Panel value="content">
            <Content />
          </Tabs.Panel>
          <Tabs.Panel value="achievements">Achievements</Tabs.Panel>
          <Tabs.Panel value="research">Research</Tabs.Panel>
          <Tabs.Panel value="stream">Stream</Tabs.Panel>
        </Tabs>
      </SimplePage>
    </>
  );
};

export default index;
