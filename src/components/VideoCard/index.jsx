import { Card, Text } from "@mantine/core";
import classes from "./UserCardImage.module.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function index({
  bgImg,
  channelTitle,
  cardTitle,
  views,
  videoTime,
  channelName,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        onClick={() => navigate("/video-detail")}
        withBorder
        padding="lg"
        radius={25}
        className={classes.card}
      >
        <Card.Section
          h={180}
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={classes.videoTime}>
          <Text key={index}>{videoTime}</Text>
        </div>
        <div className="image-title d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <img src={channelTitle} alt="" />
            </div>
            <div>
              <Text className="channelTitle">{channelName}</Text>
            </div>
          </div>
          <div>
            <img src="/images/Group 1597061.png" alt="" />
          </div>
        </div>
        <Text className="card-title">{cardTitle}</Text>
        <div className="image-title">
          <img src={views} alt="" />
        </div>
      </Card>
    </>
  );
}
