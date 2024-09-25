import { Button, Modal, TextInput } from "@mantine/core";
import { CgLock } from "react-icons/cg";
import { Text } from "recharts";
import  "./style.css"

// eslint-disable-next-line react/prop-types
const SignInModal = ({ opened, closed }) => {
  return (
    <div>
      <Modal
        opened={opened}
        onClose={closed}
        centered
        withCloseButton={false}
        size={480}
        radius={20}
        padding={30}
      >
        <div className="text-center">
          <div className="logout-User lock-icon">
            <CgLock size={30} color="#FF0045" cursor="pointer" />
          </div>
          <div>
            <Text className="fw-semibold fs-5 mt-3" size="lg">
              Please enter your password
            </Text>
          </div>
          <div>
            <Text className="title" size="lg" mb={10}>
              Enter your password to make this change.
            </Text>
          </div>
        </div>
        <form action="#" className="width">
          <TextInput
            label="Email or username"
            placeholder="Type your email or username"
            className="width"
            radius={10}
            size="lg"
            mt={20}
            mb={20}
          />
          <TextInput
            label="Password"
            className="width"
            placeholder="password"
            radius={10}
            size="lg"
          />
          <div className="mr-5 text-center mt-3">
            <Button className="whiteBtn padding" size="lg">
              Cancel
            </Button>
            <Button className="redBtn padding mr" size="lg">
              Sign in
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SignInModal;
