import { Grid, Text } from "@mantine/core";
import VideoCard from "../../components/VideoCard";
// import "./style.css";
import { LiveSportsData } from "../../data/LiveSportsData";
import { useNavigate } from "react-router-dom";

const LiveSport = () => {
    const navigate = useNavigate()
  return (
    <div className="mt-5">
      <Text className="page-title">Sports</Text>
      <Grid mt={30}>
        <Grid.Col span={12}>
          <div className="thomas">
            <img src="/images/live-sports.png" alt="img" />
          </div>
        </Grid.Col>
      </Grid>
      <Text className="video-section-title">
        Sports videos we think you’ll like
      </Text>
      <Grid mt={30}>
        {LiveSportsData.map((data) => {
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

export default LiveSport;
