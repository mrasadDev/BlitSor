import { Grid, Text, Divider, Button } from "@mantine/core";
import { MdOutlineRemoveRedEye, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import SimplePage from "../../components/SimplePage";
import "./style.css";

const index = () => {
  return (
    <SimplePage>
      <div>
        <Text className="page-title mb-3">Channel Dashboard</Text>
        <Divider />
        <Grid className="mt-3">
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <h4>
              All Videos <MdKeyboardArrowDown />
            </h4>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <div className="text-end">
              <Button className="redBtn mt-0">Upload Video</Button>
              <Button className="redBtn mt-0">Go Live</Button>
            </div>
          </Grid.Col>
        </Grid>
        <Grid mt={30}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <figure className="channel-video">
              <img src="/images\dasboard-vid-1.png" alt="..." />
            </figure>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <div>
              <h5 className="text-24">
                Dota 2 Gameplay Ep 1 with all master techniques
              </h5>
              <span className="text-secondary">Category: Dota 2</span>
              <ul className="video-list list-unstyled mt-2">
                <li>
                  <span className="video-details">
                    <MdOutlineRemoveRedEye /> 66.8K Views
                  </span>
                </li>
                <li>
                  <span className="video-details">
                    <AiOutlineLike /> 5.6k Likes
                  </span>
                </li>
                <li>
                  <span className="video-details">
                    <TfiCommentAlt /> 657 Comments
                  </span>
                </li>
              </ul>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <figure className="channel-video">
              <img src="/images\dashboard-vid-2.png" alt="..." />
            </figure>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <div>
              <h5 className="text-24">
                PUBG PC, who are the real pro players in your opinion?
              </h5>
              <span className="text-secondary">Category: PUBG</span>
              <ul className="video-list list-unstyled mt-2">
                <li>
                  <span className="video-details">
                    <MdOutlineRemoveRedEye /> 66.8K Views
                  </span>
                </li>
                <li>
                  <span className="video-details">
                    <AiOutlineLike /> 5.6k Likes
                  </span>
                </li>
                <li>
                  <span className="video-details">
                    <TfiCommentAlt /> 657 Comments
                  </span>
                </li>
              </ul>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <figure className="channel-video">
              <img src="/images\dashboard-vid-3.png" alt="..." />
            </figure>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <div>
              <h5 className="text-24">
                Red Dead Redemption 2 - Open World Free Roam Gameplay
              </h5>
              <span className="text-secondary">
                Category: Action | Gameplay
              </span>
              <ul className="video-list list-unstyled mt-2">
                <li>
                  <span className="video-details">
                    <MdOutlineRemoveRedEye /> 66.8K Views
                  </span>
                </li>
                <li>
                  <span className="video-details">
                    <AiOutlineLike /> 5.6k Likes
                  </span>
                </li>
                <li>
                  <span className="video-details">
                    <TfiCommentAlt /> 657 Comments
                  </span>
                </li>
              </ul>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </SimplePage>
  );
};

export default index;
