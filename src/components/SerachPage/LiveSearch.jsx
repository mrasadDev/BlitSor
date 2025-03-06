import { useNavigate } from "react-router-dom";
import SearchResult from "../Search-record/SearchResult";
import { searchData } from "../../data/SearchData";
import { ScrollArea, Text } from "@mantine/core";
import ShortCard from "../ShortCard";
import { shortsData } from "../../data/Categories";

const LiveSearch = ({ searchQuery }) => {
  const navigate = useNavigate();
  const filteredData = searchData.filter((data) =>
    data.cardTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Text size="lg" mb={20}>
        Showing Result of <span className="fw-bold">{searchQuery}</span>
      </Text>
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <div key={data.id}>
              <SearchResult
                data={data}
                flag={true}
                navigateTo={() => navigate("/video-detail", { state: data })}
              />
            </div>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div>

      <Text className="video-section-title">Trending Blits</Text>
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
    </>
  );
};

export default LiveSearch;
