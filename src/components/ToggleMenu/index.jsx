import { Menu, rem } from "@mantine/core";
import { IconLogin2 } from "@tabler/icons-react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function index({onSignInOPen, onSignUpOpen}) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
      <div style={{ display: 'inline-block', cursor: 'pointer' }}>
          <BsThreeDotsVertical size={22} className="toggle-button" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconLogin2 style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={onSignInOPen}
        >
          Sign in
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconLogin2 style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={onSignUpOpen}
        >
          Sign up
        </Menu.Item>

      </Menu.Dropdown>
    </Menu>
  );
}
