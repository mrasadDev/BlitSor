import React from "react";
import { Grid, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
import { watchedVideosData } from "../../data/WatchedVideos";
import "./style.css";

const Home = () => {
  return (
    <>
      <Text className="page-title">Sarah featured clips</Text>
      <Grid className="pt-2 pb-2" mt={30}>
        {watchedVideosData.map((data) => {
          return (
            <Grid.Col
              className="mb-3"
              span={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={data.id}
            >
              <Grid></Grid>
              <VideoCard
                bgImg={data.bgImg}
                channelTitle={data.channelTitle}
                channelName={data.channelName}
                cardTitle={data.cardTitle}
                views={data.views}
                videoTime={data.videoTime}
              />
            </Grid.Col>
          );
        })}
      </Grid>
      <Text className="page-title mb-3">Sarah suggests these streamers</Text>
      <Grid>
        <Grid.Col span={{ base: 3, sm: 2, md: 2, lg: 2 }}>
          <div className="sugggest-streamer channel-name text-center">
            <figure className="avatar me-2 mb-2">
              <img src="images/channel-1.png" alt="..." />
            </figure>
            <div className="">
              <h5 className="mb-0">Micheal Jr</h5>
              <span>18.7k followers</span>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2, md: 2, lg: 2 }}>
          <div className="sugggest-streamer channel-name text-center">
            <figure className="avatar me-2 mb-2">
              <img src="images/avatar-3.png" alt="..." />
            </figure>
            <div className="">
              <h5 className="mb-0">William Castle</h5>
              <span>6.1k followers</span>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2, md: 2, lg: 2 }}>
          <div className="sugggest-streamer channel-name text-center">
            <figure className="avatar me-2 mb-2">
              <img src="images/avatar-you.jpg" alt="..." />
            </figure>
            <div className="">
              <h5 className="mb-0">Amaan Bhatti</h5>
              <span>150k followers</span>
            </div>
          </div>
        </Grid.Col>
      </Grid>
      <div className="d-flex"></div>
    </>
  );
};

export default Home;
