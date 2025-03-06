import React from "react";
import { Grid, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
import { watchedVideosData } from "../../data/WatchedVideos";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
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
                data={data}
                navigateTo={() => navigate("/video-detail", { state: data })}
              />
            </Grid.Col>
          );
        })}
      </Grid>
      <Text className="page-title mb-3">Sarah suggests these streamers</Text>
      <Grid>
        <Grid.Col span={{ base: 3, sm: 2, md: 2, lg: 2 }}>
          <div className=" channel-name text-center">
            <figure className=" channel-owner-img me-2 mb-2">
              <img src="images/channel-1.png" alt="..." />
            </figure>
            <div className="">
              <h5 className="mb-0">Micheal Jr</h5>
              <span>18.7k followers</span>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2, md: 2, lg: 2 }}>
          <div className=" channel-name text-center">
            <figure className=" channel-owner-img me-2 mb-2">
              <img src="images/vid-1.png" alt="..." />
            </figure>
            <div className="">
              <h5 className="mb-0">William Castle</h5>
              <span>6.1k followers</span>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2, md: 2, lg: 2 }}>
          <div className=" channel-name text-center">
            <figure className=" channel-owner-img me-2 mb-2">
              <img src="images/vid-1.png" alt="..." />
            </figure>
            <div className="">
              <h5 className="mb-0">William</h5>
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