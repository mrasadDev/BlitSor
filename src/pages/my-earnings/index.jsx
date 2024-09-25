import { Text, Divider, Grid } from "@mantine/core";
import { MdKeyboardArrowDown } from "react-icons/md";
import SimplePage from "../../components/SimplePage";
import FileBtn from "../../components/file-button/FileBtn";
import "./style.css";
import { IoArrowUpOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const index = () => {
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
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}></Grid.Col>
        </Grid>
        <Grid>
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
      </SimplePage>
    </>
  );
};

export default index;
