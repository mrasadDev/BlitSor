import { Grid, Text } from "@mantine/core";
import { BsDot } from "react-icons/bs";
import "./style.css"

const RecmendedVideo = ({
 data,  navigateTo
}) => {
  return (
    <>
     <Grid className="recomended-main" onClick={navigateTo}>
        <Grid.Col span={{ base: 12, sm: 3, md: 3, lg: 5 }}>
          <figure className="channel-video">
            <img src={data?.vidImg} alt=".." />
          </figure>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 3, md: 9, lg: 6 }}>
          <div className="recomended-content ">
            <h5 className="mb-1 responsive-text">{data?.cardTitle}</h5>
            <Text className="channel-name">{data?.channelName}</Text>
            <span>
              {data?.views} <BsDot /> {data?.uploadTime}
            </span>
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default RecmendedVideo;
