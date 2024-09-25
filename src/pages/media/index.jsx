import React from "react";
import { useState } from "react";
import SimplePage from "../../components/SimplePage";
import { Tabs, Divider, Text } from "@mantine/core";

import Videos from "./Videos";
import "./style.css";

const index = () => {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <SimplePage>
      <Text className="page-title mb-3">Channel Media</Text>
      <Divider className="mb-3" />
      <Tabs defaultValue="videos" value={activeTab} onChange={setActiveTab}>
        <Tabs.List className="mb-25">
          <Tabs.Tab value="videos" className="active-tab">
            Videos
          </Tabs.Tab>
          <Tabs.Tab value="360 videos">360 Videos</Tabs.Tab>
          <Tabs.Tab value="blits">Blits</Tabs.Tab>
          <Tabs.Tab value="live streams">Live Streams</Tabs.Tab>
          <Tabs.Tab value="play list">Play List</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="videos">
          <Videos />
        </Tabs.Panel>
        <Tabs.Panel value="360 videos">360 videos</Tabs.Panel>
        <Tabs.Panel value="blits">Blits</Tabs.Panel>
        <Tabs.Panel value="live streams">Live Streams</Tabs.Panel>
        <Tabs.Panel value="play list">Play List</Tabs.Panel>
      </Tabs>
    </SimplePage>
  );
};

export default index;
