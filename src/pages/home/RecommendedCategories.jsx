import { ScrollArea, Text } from "@mantine/core";
import ShortCard from "../../components/ShortCard";
import VideoCard from "../../components/VideoCard";
import "./style.css";
import { shortsData } from "../../data/Categories";
import { CategoryWatchedVideos } from "../../data/CategoryWatchedVideos";
import { useNavigate } from "react-router-dom";

const RecommendedCategories = () => {
    const navigate = useNavigate()
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
          {shortsData.map((data) => (
            <div key={data.id} style={{ flex: "0 0 200px" }}>
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
            <div key={data.id} style={{ flex: "0 0 200px" }}>
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
      <Text className="video-section-title">PUBG Live Stream</Text>
      <ScrollArea style={{ width: "100%" }}
        type="hover"
        scrollbarSize={10}
        offsetScrollbars>
      <div style={{ display: "flex", marginTop: 30, gap: "10px", cursor:"pointer" }}>
        {CategoryWatchedVideos.map((data) => {
          return (
            <div key={data.id} style={{ flex: "0 0 270px" }}>
              <VideoCard
                 data={data}
                 navigateTo={() => navigate("/video-detail", { state: data })}
              />
            </div>
          );
        })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RecommendedCategories;
