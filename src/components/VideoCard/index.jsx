import { Card, Text } from "@mantine/core";
import classes from "./UserCardImage.module.css";

export default function index({ bgImg, channelTitle, cardTitle, views }) {
  return (
    <Card withBorder padding="lg" radius={25} className={classes.card}>
      <Card.Section
        h={180}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="image-title d-flex justify-content-between">
        <div className="d-flex">
          <div>
            <img src={channelTitle} alt="" />
          </div>
          <div>
            <Text className="channelTitle">Andy Willian</Text>
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
  );
}
