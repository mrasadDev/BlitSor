import { Card, Text } from "@mantine/core";
import classes from "./UserCardImage.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function index({ data, navigateTo }) {
  return (
    <>
      <Card
        withBorder
        padding="lg"
        radius={15}
        className={classes.card}
        onClick={navigateTo}
      >
        <Card.Section
          h={180}
          style={{
            backgroundImage: `url(${data?.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={classes.videoTime}>
          <Text>{data?.videoTime}</Text>
        </div>

        {data.LiveLabel && 
          <div className={classes.LiveLabel}>
            <Text>{data?.LiveLabel}</Text>
          </div>
        }
         
        {data.LabelDollar && 
          <div className={classes.LabelDollar}>
            <Text>{data?.LabelDollar}</Text>
          </div>
        }
        <div className="image-title d-flex justify-content-between">
          <div className="d-flex">
            <figure className="channel-owner-img">
              <img src={data?.channelTitle} alt="" />
            </figure>
            <div className="text-end">
              <Text className="channelTitle">{data?.channelName}</Text>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <Text className="card-title">{data?.cardTitle}</Text>
        <Text size="sm" style={{ color: "#808191" }} mt={10}>
          {data?.views}K views . {data?.uploadTime} weeks ago
        </Text>
      </Card>
    </>
  );
}
