import React from "react";
import SimplePage from "../../components/SimplePage";
import { Grid, Button, Tabs, Text } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import classes from "../../styles/Tabs.module.css";
import Home from "./Home";
import { CiLink } from "react-icons/ci";
import { GiFallingStar } from "react-icons/gi";
import { CgCalendarDates } from "react-icons/cg";

const index = () => {
  const [activeTab, setActiveTab] = useState("videos");
  return (
    <>
      <SimplePage>
        <div className="channel-banner">
          <div className="person-detail">
            <span className="active-status">OFFLINE</span>
            <h5 className="heading-3">Sarah Johnson is Offline.</h5>
            <p>
              🎮 Leveling up one game at a time! 🔥 Join me on epic gaming
              adventures, boss battles, and epic wins! 🚀 
            </p>
            <ul className="list-unstyled">
              <li>
                <GiFallingStar /> Tip me!
              </li>
              <li>
                <CiLink /> Linktree
              </li>
              <li>
                <CgCalendarDates /> Sarah's next stream will be Thursday, June 6
              </li>
            </ul>
          </div>
        </div>

        <Grid className="video-channel my-4 ">
          <Grid.Col span={{ lg: 5 }}>
            <div className="channel-name d-flex align-items-center">
              <figure className="avatar me-2">
                <img src="images/avatar-sarah.png" alt="..." />
              </figure>
              <div className="">
                <h5 className="mb-0">Sarah Johnson</h5>
                <span>18.7k followers</span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ lg: 7 }}>
            <div className="text-end">
              <Button className="redBtn px-3 mt-0">
                <FaBell />
              </Button>
              <Button className="redBtn px-3 mt-0">Follow</Button>
              <Button className="redBtn px-3 mt-0">Subscribe</Button>
              <BsThreeDotsVertical />
            </div>
          </Grid.Col>
        </Grid>
        <Tabs
          defaultValue="videos"
          value={activeTab}
          onChange={setActiveTab}
          classNames={classes}
        >
          <Tabs.List className="mb-25">
            <Tabs.Tab value="videos">Home</Tabs.Tab>
            <Tabs.Tab value="360 videos">Videos</Tabs.Tab>
            <Tabs.Tab value="blits">Schedule</Tabs.Tab>
            <Tabs.Tab value="live streams">Playlist</Tabs.Tab>
            <Tabs.Tab value="play list">About</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="videos">
            <Home />
          </Tabs.Panel>
          <Tabs.Panel value="360 videos">Videos</Tabs.Panel>
          <Tabs.Panel value="blits">Schedule</Tabs.Panel>
          <Tabs.Panel value="live streams">Playlist</Tabs.Panel>
          <Tabs.Panel value="play list">About</Tabs.Panel>
        </Tabs>
      </SimplePage>
    </>
  );
};

export default index;
