import {
  Anchor,
  AppShell,
  Autocomplete,
  Burger,
  Button,
  ScrollArea,
  Text,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMicrophone, IconSearch } from "@tabler/icons-react";
import { NavbarSimple } from "../NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import SignInModal from "../Modals/SignInModal";
import SignUpModal from "../Modals/SignUpModal";
import ToggleMenu from "../ToggleMenu";
import "./style.css";
import { useState } from "react";
import EmailVerification from "../Modals/EmailVerification";

export function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  const [signupOpened, { open: signupOpen, close: signupClose }] =
    useDisclosure(false);
  const [signinOpened, { open: signinOpen, close: signinClose }] =
    useDisclosure(false);
  const [navBar, setNavBar] = useState(false);
  const navigate = useNavigate();
  const [emailOpened, {open: emailOpen, close: emailClose}] = useDisclosure(false);

  const iconSearch = (
    <>
      <IconSearch style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );
  const iconMicrophone = (
    <>
      <IconMicrophone
        style={{
          width: rem(25),
          height: rem(16),
          color: "black",
          borderLeft: "1px solid #ccc",
          paddingLeft: "7px",
        }}
      />
    </>
  );

  const handleChangeNavBar = () => {
    navigate("/");
    setNavBar(true);
    window.location.href = "/?_=" + new Date().getTime();
  };

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 80, md: 70, lg: 80 } }}
      navbar={{
        width: {
          base: 400,
          md: 260,
          lg: 260,
        },
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
    >
      <EmailVerification opened={emailOpened} closed={emailClose} />
      <AppShell.Header zIndex={200}>
        <div className="d-flex justify-content-between pr-5">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            size="sm"
            className="mt-4"
          />
          <div className="company-logo">
            <Anchor
              onClick={() => navigate("/")}
              className="text-decoration-none text-dark"
            >
              <Text className="logo">BLITSOR</Text>
            </Anchor>
            <ToggleMenu onSignInOPen={signinOpen} onSignUpOpen={signupOpen} />
          </div>
          <Autocomplete
            className="search-bar"
            leftSection={iconSearch}
            placeholder="Search"
            variant="filled"
            data={[
              "How to Swim Tutorials",
              "Pubg PC Gameplay Videos",
              "Lana Steiner",
              "Demi Vilkinson",
              "Candice Wu",
              "Natali Crage",
              "Drew Cano",
            ]}
            rightSection={iconMicrophone}
            radius={10}
          />
          <div className="login-btns mr-5">
            <Button className="whiteBtn" onClick={signinOpen}>
              Sign in
            </Button>
            <Button className="redBtn" onClick={signupOpen}>
              Sign Up
            </Button>
            <BsThreeDotsVertical
              size={22}
              className="toggle-button"
              cursor="pointer"
              onClick={emailOpen}
            />
          </div>
          <div className="toggle-btn mr-5"></div>
        </div>
      </AppShell.Header>
      <AppShell.Navbar height={100}>
        <div>
          <Anchor
            onClick={handleChangeNavBar}
            className="text-decoration-none text-dark"
          >
            <Text className="logo">BLITSOR</Text>
          </Anchor>
        </div>
        <ScrollArea>
          <NavbarSimple
            signinOpen={signinOpen}
            signupOpen={signupOpen}
            navBar={navBar}
          />
        </ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <SignInModal opened={signinOpened} closed={signinClose} />
        <SignUpModal opened={signupOpened} closed={signupClose} />
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
