import { useState } from "react";
import SimplePage from "../SimplePage";
import { Tabs } from "@mantine/core";
import classes from "../../styles/SearchTabs.module.css";
import "./style.css";
import AllSearch from "./AllSearch";
import LiveSearch from "./LiveSearch";
import { useLocation } from "react-router-dom";

const SearchList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();
  const searchQuery = location.state?.query || "";

  return (
    <SimplePage>
      <Tabs
        defaultValue="all"
        value={activeTab}
        onChange={setActiveTab}
        classNames={classes}
      >
        <Tabs.List>
          <Tabs.Tab value="all" className="mb-25">
            All
          </Tabs.Tab>
          <Tabs.Tab value="videos" className="mb-25">
            Videos
          </Tabs.Tab>
          <Tabs.Tab value="live" className="mb-25">
            Live
          </Tabs.Tab>
          <Tabs.Tab value="blits" className="mb-25">
            Blits
          </Tabs.Tab>
          <Tabs.Tab value="channels" className="mb-25">
            Channels
          </Tabs.Tab>
          <Tabs.Tab value="playlist" className="mb-25">
            Playlist
          </Tabs.Tab>
          <Tabs.Tab value="unwatched" className="mb-25">
            Unwatched
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="all">
          <AllSearch searchQuery={searchQuery}/>
        </Tabs.Panel>
        <Tabs.Panel value="videos">Videos</Tabs.Panel>
        <Tabs.Panel value="live">
          <LiveSearch searchQuery={searchQuery}/>
        </Tabs.Panel>
        <Tabs.Panel value="blits">Blits</Tabs.Panel>
        <Tabs.Panel value="channels">Channels</Tabs.Panel>
        <Tabs.Panel value="playlist">Play List</Tabs.Panel>
        <Tabs.Panel value="unwatched">Un Watched</Tabs.Panel>
      </Tabs>
    </SimplePage>
  );
};

export default SearchList;
