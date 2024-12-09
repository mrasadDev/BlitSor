import { Grid, Text } from "@mantine/core";
import React from "react";
import { BsDot } from "react-icons/bs";
import "./style.css";

const RecmendedVideo = ({
  vidImg,
  videoTitle,
  channelName,
  views,
  uploadTime,
}) => {
  return (
    <>
      <Grid className="recomended-main">
        <Grid.Col span={{ base: 12, sm: 3, md: 3, lg: 5 }}>
          <figure className="recomended-img pe-2">
            <img src={vidImg} alt=".." />
          </figure>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 3, md: 9, lg: 7 }}>
          <div className="recomended-content ">
            <h5 className="mb-1 responsive-text">{videoTitle}</h5>
            <Text className="channel-name">{channelName}</Text>
            <span>
              {views} <BsDot /> {uploadTime}
            </span>
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default RecmendedVideo;
