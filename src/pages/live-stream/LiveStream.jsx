import { Grid, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
// import "./style.css";
import { LiveStreamData } from "../../data/LiveStreamData";
import { useNavigate } from "react-router-dom";

const LiveStream = () => {
    const navigate = useNavigate()
  return (
    <div className="mt-5">
      <Text className="page-title">Live Stream</Text>
      <Grid mt={30}>
        <Grid.Col span={12}>
          <div className="thomas">
            <img src="/images/live-stream.png" alt="img" />
          </div>
        </Grid.Col>
      </Grid>
      <Text className="video-section-title">
        Live Streaming Categories you’ll like
      </Text>
      <Grid mt={30}>
        {LiveStreamData.map((data) => {
          return (
            <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={data.id}>
              <VideoCard
                 data={data}
                 navigateTo={() => navigate("/live-video", { state: data })}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default LiveStream;
