import { Grid, Text } from "@mantine/core";
import SimplePage from "../../components/SimplePage";
import { FaEllipsisVertical, FaArrowRight } from "react-icons/fa6";
import "./style.css";

const index = () => {
  return (
    <>
      <SimplePage>
        <Grid className="page-banner">
          <Grid.Col span={{ lg: 7 }}>
            <div className="banner-content">
              <Text className="banner-title mb-2">
                Lorem ipsum dolor sit amet consectetur. Justo erat nec.
              </Text>
              <h5>Lorem ipsum dolor sit amet consectetur.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Senectus semper velit
                donec arcu enim placerat viverra sed etiam. Nulla consectetur
                integer elit est feugiat. Imperdiet est tempus aliquam
                vestibulum donec platea amet. Lorem ipsum dolor sit amet
                consectetur.
              </p>
              <a href="#" className="banner-link">
                Get Started Today! <FaArrowRight className="ms-2" />
              </a>
            </div>
          </Grid.Col>
          <Grid.Col span={{ lg: 5 }}>
            <figure className="page-banner-img">
              <img src="images/playlist-banner.png" alt="..." />
            </figure>
          </Grid.Col>
        </Grid>
        <Text className="page-title my-3">My PlayList</Text>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/thmubnail-2.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">VR 360 Events</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 2 days Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/playlist-img-2.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">My Songs List</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 4 Mon Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/playlist-img-3.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">My Songs List</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 4 Mon Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/playlist-img.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">Nature Vibes</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 1 Year Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/thmubnail-2.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">VR 360 Events</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 2 days Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/playlist-img-2.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">My Songs List</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 4 Mon Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/playlist-img-3.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">My Songs List</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 4 Mon Ago</span>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="playlist-img">
              <figure>
                <img src="images/playlist-img.png" alt="..." />
              </figure>
              <h5>Play all</h5>
              <span className="playlist-status">Public</span>
            </div>
            <div className="playlist-content p-2">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="playlist-title">Nature Vibes</Text>
                <FaEllipsisVertical className="text-secondary" />
              </div>
              <a href="#">View Playlist</a>
              <span className="d-block">• Updated 1 Year Ago</span>
            </div>
          </Grid.Col>
        </Grid>
      </SimplePage>
    </>
  );
};

export default index;
