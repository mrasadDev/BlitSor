import { useState } from "react";
import SimplePage from "../../components/SimplePage";
import { Tabs } from "@mantine/core";
import classes  from "../../styles/Tabs.module.css";
import LiveStream from "./LiveStream";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all categories");

  return (
    <SimplePage>
      <Tabs
        defaultValue="all categories"
        value={activeTab}
        onChange={setActiveTab}
        classNames={classes}
      >
        <Tabs.List>
          <Tabs.Tab value="all categories" className="mb-25">
            All Categories
          </Tabs.Tab>
          <Tabs.Tab value="recommended" className="mb-25">
            Recommended Categories
          </Tabs.Tab>
          <Tabs.Tab value="360 videos" className="mb-25">
            360 Videos
          </Tabs.Tab>
          <Tabs.Tab value="pubg" className="mb-25">
            PUBG
          </Tabs.Tab>
          <Tabs.Tab value="call of duty" className="mb-25">
            Call of Duty
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all categories">
          <LiveStream />
        </Tabs.Panel>
        <Tabs.Panel value="recommended">Recommended Categories</Tabs.Panel>
        <Tabs.Panel value="360 videos">Category Videos</Tabs.Panel>
        <Tabs.Panel value="pubg">Pub g</Tabs.Panel>
        <Tabs.Panel value="call of duty">Call of Duty</Tabs.Panel>
      </Tabs>
    </SimplePage>
  );
};

export default Index;