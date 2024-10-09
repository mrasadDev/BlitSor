import { Text } from "@mantine/core";
import React from "react";
import { BsDot } from "react-icons/bs";

const RecmendedVideo = ({
  vidImg,
  videoTitle,
  channelName,
  views,
  uploadTime,
}) => {
  return (
    <>
      <div className="recomended-video mb-2 d-flex">
        <figure className="recomended-img pe-2">
          <img src={vidImg} alt=".." />
        </figure>
        <div className="recomended-content mt-2">
          <h5 className="mb-1">{videoTitle}</h5>
          <Text className="channel-name">{channelName}</Text>
          <span>
            {views} <BsDot /> {uploadTime}
          </span>
        </div>
      </div>
    </>
  );
};

export default RecmendedVideo;
