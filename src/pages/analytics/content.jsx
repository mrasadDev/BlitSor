import { Grid, Menu, Text, Button, rem } from "@mantine/core";
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons-react";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowUpOutline } from "react-icons/io5";
import { AreaChart } from "@mantine/charts";
import StackedBarChart from "../../components/BarChart";
import "./style.css";

const Content = () => {
  const data = [
    {
      date: "Mar 22",
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: "Mar 23",
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: "Mar 24",
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: "Mar 25",
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: "Mar 26",
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  ];

  return (
    <>
      <Grid className="mt-3">
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <h4>
            Blits <MdKeyboardArrowDown />
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
                      <IconPhoto style={{ width: rem(14), height: rem(14) }} />
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
                      <IconPhoto style={{ width: rem(14), height: rem(14) }} />
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
      <Grid className="my-4">
        <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <div className="earning-box">
            <div className="d-flex align-items-center justify-content-between">
              <Text className="text-14 text-secondary">
                New Viewers (30 Days)
              </Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">9842</h3>
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
              <Text className="text-14 text-secondary">Returning Viewers</Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">88.3K</h3>
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
              <Text className="text-14 text-secondary">
                Subscribers (30 Days)
              </Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">2.62K</h3>
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
              <Text className="text-14 text-secondary">Views (30 Days)</Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">18.6K</h3>
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
              <Text className="text-14 text-secondary">Content Uploaded</Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">22</h3>
              <span className="badge green-badge">
                <IoArrowUpOutline />
                13%
              </span>
            </div>
          </div>
        </Grid.Col>
      </Grid>
      <Text className="mid-heading">Monthly Blits Views Graph</Text>
      <AreaChart
        className="my-4"
        h={300}
        data={data}
        dataKey="date"
        type="stacked"
        withGradient={true}
        withDots={false}
        withLegend
        series={[
          { name: "Apples", color: "#8C0026" },
          { name: "Oranges", color: "#FF336A" },
          { name: "Tomatoes", color: "#E8003F" },
        ]}
      />
      <Text className="mid-heading  mb-3">Monthly Subscribers Analysis</Text>
      <StackedBarChart />
    </>
  );
};

export default Content;
