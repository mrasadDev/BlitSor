import { Text } from "@mantine/core";
import { LuUser } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";

const index = () => {
  return (
    <>
      <div className="d-flex mt-5">
        <div className="logout-User">
          <LuUser size={25} color="#FF0045" cursor="pointer" />
        </div>
        <div className="loggedUser">
          <Text className="fw-semibold mt-2 ml-2">Thomas Wayne</Text>
        </div>
        <MdOutlineLogout className="mt-2" size={25} cursor="pointer" />
      </div>
    </>
  );
};

export default index;
