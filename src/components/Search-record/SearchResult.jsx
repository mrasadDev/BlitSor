import { Grid, Text } from "@mantine/core";
import { BsDot } from "react-icons/bs";
import "./style.css";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ data, flag, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid className="recomended-main" onClick={navigateTo}>
        <Grid.Col
          span={{ base: 12, sm: 6, md: 6, lg: 3 }}
          className="image_wrapper"
        >
          {flag && (
            <div className="LiveLabel">
              <Text>{data?.LiveLabel}</Text>
            </div>
          )}
          <figure className="channel-video">
            <img src={data?.vidImg} alt=".." />
          </figure>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 6, lg: 8 }}>
          <div className="recomended-content mt-1">
            <h5 className="mb-1 responsive-text fw-bold">{data?.cardTitle}</h5>
            <div
              className="channel-name d-flex align-items-center  mt-3"
              onClick={() => navigate("/channel-detail")}
            >
              <figure className="channel-owner-img me-1">
                <img src="images/channel-1.png" alt="..." />
              </figure>
              <div className="mx-2">
                <h5 className="mb-0">{data?.channelName}</h5>
                <span> 1.5K views . 2 weeks ago</span>
              </div>
            </div>
          </div>
          <Text size="sm" style={{ color: "#808191" }} mt={10}>
            {data?.description}
          </Text>
          <div className="video-tags1 channel-tag">
            <ul className="list-unstyled mb-0">
              <li>Gaming</li>
              <li>Live Stream</li>
              <li>Gameplay</li>
              <li>unboxingdota</li>
              <li>2024</li>
              <li>Challenge</li>
            </ul>
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default SearchResult;
