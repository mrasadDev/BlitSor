import { Grid, ScrollArea, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
import ShortCard from "../../components/ShortCard";
import { watchedVideosData } from "../../data/WatchedVideos";
import { shortsData } from "../../data/Categories";
import "./style.css";

const AllCategories = () => {
  return (
    <div className="mt-5">
      <Text className="page-title">Discover</Text>
      <Grid mt={30}>
        <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
          <div className="thomas">
            <img src="/images/group111.png" alt="" />
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
          <div className="mike">
            <img src="/images/group 112.png" alt="" />
          </div>
        </Grid.Col>
      </Grid>
      <Text className="video-section-title">Most Watched Videos</Text>
      <Grid mt={30}>
        {watchedVideosData.map((data) => {
          return (
            <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={data.id}>
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
      <Text className="video-section-title">
        Categories we think you'll like
      </Text>
      <ScrollArea
        style={{ width: "100%" }}
        type="hover"
        scrollbarSize={5}
        offsetScrollbars
      >
        <div
          style={{
            display: "flex",
            marginTop: 30,
            gap: "10px",
            cursor: "pointer",
          }}
        >
          {shortsData.map((data) => (
            <div key={data.id} style={{ flex: "0 0 270px" }}>
              <ShortCard
                bgImg={data.bgImg}
                title={data.title}
                views={data.views}
                watch={data.watch}
                category={data.category}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AllCategories;
