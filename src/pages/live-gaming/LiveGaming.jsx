import { Grid, ScrollArea, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
// import "./style.css";
import { LiveGamingData } from "../../data/LiveGamingData";

const LiveGaming = () => {
  return (
    <div className="mt-5">
      <Text className="page-title">Gaming</Text>
      <Grid mt={30}>
        <Grid.Col span={12}>
          <div className="thomas">
            <img src="/images/gaming.png" alt="img" />
          </div>
        </Grid.Col>
      </Grid>
      <Text className="video-section-title">
        Gaming videos we think you’ll like
      </Text>
      <Grid mt={30}>
        {LiveGamingData.map((data) => {
          return (
            <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={data.id}>
              <VideoCard
                bgImg={data.bgImg}
                channelTitle={data.channelTitle}
                cardTitle={data.cardTitle}
                views={data.views}
                videoTime={data.videoTime}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default LiveGaming;
