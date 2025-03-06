import { Grid, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
import "./style.css";
import { CategoryWatchedVideos } from "../../data/CategoryWatchedVideos";
import { useNavigate } from "react-router-dom";

const CategoryVideos = () => {
    const navigate = useNavigate()
  return (
    <div className="mt-5">
      <Text className="page-title">360 Videos</Text>
      <Grid mt={30}>
        <Grid.Col span={12}>
          <div className="thomas">
            <img src="/images/360-videos.png" alt="img" />
          </div>
        </Grid.Col>
      </Grid>
      <Text className="video-section-title">360 videos we think you’ll like</Text>
      <Grid mt={30}>
        {CategoryWatchedVideos.map((data) => {
          return (
            <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={data.id}>
              <VideoCard
                data={data}
                navigateTo={() => navigate("/video-detail", { state: data })}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default CategoryVideos;
