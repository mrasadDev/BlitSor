import { Grid, Menu, Text, Divider, Button, rem, Tabs } from "@mantine/core";
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons-react";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowUpOutline } from "react-icons/io5";
import StackedBarChart from "../../components/BarChart";
import { AreaChart } from "@mantine/charts";
import "./style.css";

const Overview = () => {
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
              <Text className="text-14 text-secondary">Views 24 hours</Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">39.3k</h3>
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
              <Text className="text-14 text-secondary">Impressions</Text>
              <BsThreeDotsVertical className="text-secondary" />
            </div>
            <div className="pt-2 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">91.8K</h3>
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
                Total watch time (hours)
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
              <Text className="text-14 text-secondary">Total subscribers</Text>
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
      </Grid>

      <div className="chart-box mb-4">
        <Text className="mid-heading">Monthly Blits Views Graph</Text>
        <AreaChart
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
      </div>
      <div className="chart-box">
        <Text className="mid-heading  mb-3">Monthly Subscribers Analysis</Text>
        <StackedBarChart />
      </div>
    </>
  );
};

export default Overview;
