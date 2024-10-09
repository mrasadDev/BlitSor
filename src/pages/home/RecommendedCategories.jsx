import { Grid, ScrollArea, Text } from "@mantine/core";
import ShortCard from "../../components/ShortCard";
import VideoCard from "../../components/VideoCard";
import "./style.css";
import { shortsData } from "../../data/Categories";
import { CategoryWatchedVideos } from "../../data/CategoryWatchedVideos";
import { RecommendedShortVideos } from '../../data/RecommendedShortVideos'

const RecommendedCategories = () => {
  return (
    <div className="mt-5">
      <Text className="video-section-title">
        Recommended Sports Videos
      </Text>
      <ScrollArea
        style={{ width: "100%" }}
        type="hover"
        scrollbarSize={10}
        offsetScrollbars
      >
        <div style={{ display: "flex", marginTop: 30, gap: "10px", cursor:"pointer" }}>
          {RecommendedShortVideos.map((data) => (
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
      <ScrollArea
        style={{ width: "100%" }}
        type="hover"
        scrollbarSize={10}
        offsetScrollbars
      >
        <div style={{ display: "flex", marginTop: 30, gap: "10px", cursor:"pointer" }}>
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
      <Text className="video-section-title">360 videos we think you’ll like</Text>
      <ScrollArea style={{ width: "100%" }}
        type="hover"
        scrollbarSize={10}
        offsetScrollbars>
      <Grid mt={30}>
        {CategoryWatchedVideos.map((data) => {
          return (
            <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={data.id}>
              <VideoCard
                bgImg={data.bgImg}
                channelTitle={data.channelTitle}
                cardTitle={data.cardTitle}
                views={data.views}
              />
            </Grid.Col>
          );
        })}
      </Grid>
      </ScrollArea>
    </div>
  );
};

export default RecommendedCategories;
