import { Text, Divider, Grid, Menu, Button, rem } from "@mantine/core";
import { MdKeyboardArrowDown } from "react-icons/md";
import SimplePage from "../../components/SimplePage";
import FileBtn from "../../components/file-button/FileBtn";
import { IoArrowUpOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ResponsivePie } from "@nivo/pie";
import { FaChevronDown } from "react-icons/fa";
import "./style.css";

import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
} from "@tabler/icons-react";

const index = () => {
  const data = [
    {
      id: "haskell",
      label: "haskell",
      value: 87,
      color: "hsl(251, 74%, 73%)",
    },
    {
      id: "css",
      label: "css",
      value: 385,
      color: "hsl(188, 96%, 44%)",
    },
    {
      id: "lisp",
      label: "lisp",
      value: 123,
      color: "hsl(31, 100%, 65%)",
    },
  ];

  return (
    <>
      <SimplePage>
        <Text className="page-title mb-3">My Earnings</Text>
        <Divider className="mb-3" />
        <div className="before-upload text-center my-5 ">
          <Text className="page-title text-center mb-3">
            Start Your Journey with us!
          </Text>
          <figure>
            <img src="images/my-earning.png" alt="..." />
          </figure>
          <p>
            Get started with blitsor now! upload videos or short blits or you
            can also start streaming live videos through our platform
          </p>
          <FileBtn title="Lets Go!" width={true} />
        </div>
        <Grid className="mt-3">
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <h4>
              All Videos <MdKeyboardArrowDown />
            </h4>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <div className="d-flex justify-content-end">
              <div className="for-wrap">
                <Menu shadow="md" width={200}>
                  <Text className="sub-heading mb-2">SHOW DATA</Text>
                  <Menu.Target>
                    <Button className="whiteBtn hover-white mt-0">
                      Everything <FaChevronDown className="ms-2" />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item
                      leftSection={
                        <IconSettings
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Settings
                    </Menu.Item>
                    <Menu.Item
                      leftSection={
                        <IconMessageCircle
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Messages
                    </Menu.Item>
                    <Menu.Item
                      leftSection={
                        <IconPhoto
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Gallery
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
              <div className="for-wrap">
                <Menu shadow="md" width={200}>
                  <Text className="sub-heading mb-2">TIME PERIOD</Text>
                  <Menu.Target>
                    <Button className="whiteBtn hover-white mt-0">
                      Last Week <FaChevronDown className="ms-2" />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item
                      leftSection={
                        <IconSettings
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Last Month
                    </Menu.Item>
                    <Menu.Item
                      leftSection={
                        <IconMessageCircle
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Last 6 Months
                    </Menu.Item>
                    <Menu.Item
                      leftSection={
                        <IconPhoto
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Last Year
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </Grid.Col>
        </Grid>
        <Grid className="mb-3">
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="earning-box">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="text-14 text-secondary">Current Balance</Text>
                <BsThreeDotsVertical className="text-secondary" />
              </div>
              <div className="pt-2 d-flex align-items-center justify-content-between">
                <h3 className="mb-0">354$</h3>
                <span className="badge green-badge">
                  <IoArrowUpOutline />
                  13%
                </span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="earning-box">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="text-14 text-secondary">Total Earnings</Text>
                <BsThreeDotsVertical className="text-secondary" />
              </div>
              <div className="pt-2 d-flex align-items-center justify-content-between">
                <h3 className="mb-0">53.4K</h3>
                <span className="badge green-badge">
                  <IoArrowUpOutline />
                  44%
                </span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="earning-box">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="text-14 text-secondary">Blits Earnings</Text>
                <BsThreeDotsVertical className="text-secondary" />
              </div>
              <div className="pt-2 d-flex align-items-center justify-content-between">
                <h3 className="mb-0">2.62k</h3>
                <span className="badge green-badge">
                  <IoArrowUpOutline />
                  21%
                </span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <div className="earning-box">
              <div className="d-flex align-items-center justify-content-between">
                <Text className="text-14 text-secondary">Stream Earnings</Text>
                <BsThreeDotsVertical className="text-secondary" />
              </div>
              <div className="pt-2 d-flex align-items-center justify-content-between">
                <h3 className="mb-0">18.6$</h3>
                <span className="badge green-badge">
                  <IoArrowUpOutline />
                  13%
                </span>
              </div>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <div className="earning-box chart">
              <div className="d-flex align-items-center justify-content-between">
                <Text>Monthly Earnings</Text>
                <div className="for-wrap">
                  <Menu shadow="md" width={200}>
                    <Menu.Target>
                      <Button className="rounded-5 p-2 whiteBtn hover-white me-0 mt-0">
                        Weekly <FaChevronDown className="ms-2" />
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item
                        leftSection={
                          <IconSettings
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                      >
                        Settings
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconMessageCircle
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                      >
                        Messages
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconPhoto
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                      >
                        Gallery
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </div>
              </div>
              <div>
                <div style={{ height: "340px", width: "500px" }}>
                  <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 100, bottom: 40, left: 80 }}
                    innerRadius={0}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    enableArcLabels={true}
                    borderWidth={1}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.2]],
                    }}
                    colors={{ datum: "data.color" }} 
                    arcLinkLabelsSkipAngle={360} 
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: "color",
                      modifiers: [["darker", 2]],
                    }}
                    arcLabel={true}
                    arcLabelsRadiusOffset={0.6} 
                    legends={[
                      {
                        anchor: "right", 
                        direction: "row", 
                        justify: false,
                        translateX: 0, 
                        translateY: 150,
                        itemsSpacing: 8, 
                        itemWidth: 100,
                        itemHeight: 18,
                        symbolSize: 18,
                        symbolShape: "circle",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </SimplePage>
    </>
  );
};

export default index;
