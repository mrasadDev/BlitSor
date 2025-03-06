import { Button, Grid, Menu, ScrollArea, Text } from "@mantine/core";
import SimplePage from "../../components/SimplePage";
import { RiWallet3Fill } from "react-icons/ri";
import "./style.css";
import { IconChevronDown } from "@tabler/icons-react";
import SliderComponent from "../../components/Slider/Slider";
import { shortsData } from "../../data/Categories";
import BlitsCard from "../../components/BlitsCard";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const giftImages = [
    { id: 1, image: "/images/football 1.png" },
    { id: 2, image: "/images/gold-medal 1.png" },
    { id: 3, image: "/images/headset 2.png" },
    { id: 4, image: "/images/heart 1.png" },
    { id: 5, image: "/images/joystick 2.png" },
    { id: 6, image: "/images/vr-technology 1.png" },
    { id: 7, image: "/images/winking-face 1.png" },
    { id: 8, image: "/images/neon-star (1) 2.png" },
  ];

  const navigate = useNavigate()

  return (
    <SimplePage>
      <div>
        <Grid>
          <Grid.Col  span={{ base: 12, sm: 6, md: 4 }}>
            <figure className="user-img">
              <img src="/images/image.png" alt="" />
            </figure>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
            <div
              style={{
                backgroundColor: "#ECECEC",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div className="text-end">
                <Button size="xs" onClick={()=> navigate("/wallet-detail")}>
                  Wallet <RiWallet3Fill className="ms-2" size={20} />
                </Button>
              </div>
              <Text style={{ color: "#00000099" }}>@christopher256</Text>
              <div>
                <Text
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                    marginTop: "1rem",
                  }}
                >
                  About
                </Text>
                <Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    marginTop: "1rem",
                  }}
                >
                  I'm a web designer and developer. I'm the co-founder of
                  CodePen, a playground for front-end web development. It's a
                  social development environment for front end designers and
                  developers. I ran the site CSS-Tricks from 2007 - 2022. Along
                  with Dave Rupert, I'm the co-host of a podcast called
                  ShopTalk, a show about (you guessed it), building websites.
                </Text>
              </div>
              <div className="mt-5">
                <Text style={{ fontSize: "14px", color: "#00000099" }}>
                  Availabel Coins
                </Text>
                <h2
                  className="d-flex align-items-center"
                  style={{
                    color: "#2F2D2D",
                    fontSize: "2.2rem",
                    fontWeight: "500",
                    lineHeight: "50px",
                    margin: "0",
                  }}
                >
                  10,000
                  <img
                    src="/images/bitcoin.png"
                    alt="Coins"
                    width={40}
                    height={40}
                    className="ms-2"
                  />
                </h2>
              </div>
            </div>
          </Grid.Col>
        </Grid>
        <Grid mt={40}>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <div
              style={{
                backgroundColor: "#ECECEC",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Text
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Gifts Received
              </Text>
              <Grid>
                {giftImages.map((image) => (
                  <Grid.Col span={3} key={image.id}>
                    <figure className="gifts-img">
                      <img src={image.image} alt="" />
                    </figure>
                  </Grid.Col>
                ))}
              </Grid>

              <div className="action-btn">
                <a href="#" className="view-all">
                  View all
                </a>
                <a href="#" className="send-gift">
                  Send Gifts
                </a>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
            <div
              style={{
                backgroundColor: "#ECECEC",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <Text
                    style={{
                      fontSize: "2.2vw",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Subscribed Channels
                  </Text>
                </div>
                <div>
                  <Menu shadow="md" width={200}>
                    <Menu.Target>
                      <Button>
                        2024 <IconChevronDown className="ms-3" />
                      </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item>2023</Menu.Item>
                      <Menu.Item>2022</Menu.Item>
                      <Menu.Item>2021</Menu.Item>
                      <Menu.Item>2020</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </div>
              </div>
              <div>
                <SliderComponent />
              </div>
            </div>
          </Grid.Col>
        </Grid>
        <Grid mt={40}>
          <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
            <div
              style={{
                backgroundColor: "#ECECEC",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Text
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Popularize Blits
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
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  {shortsData.map((data) => (
                    <div key={data.id} style={{ flex: "0 0 130px" }}>
                      <BlitsCard bgImg={data.bgImg} />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
            <div
              style={{
                backgroundColor: "#ECECEC",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Text
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Gifts Sent
              </Text>
              <Grid>
                {giftImages.map((image) => (
                  <Grid.Col span={3} key={image.id}>
                    <figure className="gifts-img">
                      <img src={image.image} alt="" />
                    </figure>
                  </Grid.Col>
                ))}
              </Grid>

              <div className="action-btn">
                <a href="#" className="view-all">
                  View all
                </a>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </SimplePage>
  );
};

export default UserDetail;
