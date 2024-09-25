import {
  Button,
  Checkbox,
  Modal,
  rem,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { LuUser } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import  "./style.css"

// eslint-disable-next-line react/prop-types
const SignUpModal = ({ opened, closed }) => {
  const iconSearch = (
    <>
      <LuUser style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );

  const iconMail = (
    <>
      <MdMailOutline
        style={{ width: rem(18), height: rem(18), color: "black" }}
      />
    </>
  );

  const iconCalender = (
    <>
      <CiCalendar style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );
  return (
    <div>
      <Modal
        opened={opened}
        onClose={closed}
        centered
        withCloseButton={false}
        size={500}
        radius={20}
        padding={22}
      >
        <div className="text-start">
          <div className="logout-User lock-icon">
            <LuUserPlus size={30} color="#FF0045" cursor="pointer" />
          </div>
          <div>
            <Text className="fw-semibold fs-5 mt-3" size="lg">
              Sign Up
            </Text>
          </div>
          <div>
            <Text className="title" size="lg" mb={6}>
              Sign up today and start your journey with us!
            </Text>
          </div>
        </div>
        <form action="#">
          <TextInput
            label="Email address"
            placeholder="Type your email"
            leftSection={iconMail}
            radius={10}
            size="lg"
            mt={10}
            mb={10}
          />
          <Select
            label="Username"
            placeholder="Select a username"
            radius={10}
            leftSection={iconSearch}
            size="lg"
            mt={20}
            mb={20}
          />

          <TextInput
            label="Password"
            placeholder="password"
            radius={10}
            size="lg"
          />
          <Select
            label="Date of birth"
            placeholder="Month"
            leftSection={iconSearch}
            radius={10}
            size="lg"
            mt={20}
            mb={20}
          />
          <TextInput
            placeholder="Date"
            leftSection={iconCalender}
            radius={10}
            size="lg"
            mt={20}
            mb={20}
          />
          <TextInput
            placeholder="Year"
            leftSection={iconCalender}
            radius={10}
            size="lg"
            mt={20}
            mb={20}
          />
          <Checkbox label="To authorize transactions, please scan this QR code with your Google Authenticator App and enter the verification code below." />
          <Text className="title" size="lg" mb={10}>
            Save my login details for next time.
          </Text>
          <div className="text-center">
            <Button className="whiteBtn padding" size="lg">
              Cancel
            </Button>
            <Button className="redBtn padding mr" size="lg">
              Sign Up
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SignUpModal;
