import { Button, Divider, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { AiFillTikTok } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { FaMusic } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TiMediaPlay } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { RiListSettingsFill } from "react-icons/ri";
import { BsWebcam } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { LuPackagePlus } from "react-icons/lu";
import classes from "./NavbarSimple.module.css";
import LogOutUser from "../LogoutUser";
import { FaRegUser } from "react-icons/fa6";

const data = [
  {
    flag: true,
    link: "",
    label: "HOME",

    links: [
      {
        label: "Discover",
        link: "/",
        icon: <GoHomeFill />,
      },
      {
        label: "Blits",
        link: "/blits",
        icon: <AiFillTikTok />,
      },
      {
        label: "Streaming",
        link: "/streaming",
        icon: <CiStreamOn />,
      },
      {
        label: "Playlist",
        link: "/play-list",
        icon: <MdOutlinePlaylistPlay />,
      },
    ],
    count: 1,
  },
  {
    flag: false,
    link: "",
    label: "All Categories",
    links: [
      {
        label: "Live Stream",
        link: "/live-stream",
        icon: <TbLivePhoto />,
      },
      {
        label: "Live Sports",
        link: "/live-sport",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1C10 0.44772 10.4477 0 11 0H15C15.5523 0 16 0.44772 16 1V5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5V2H11C10.4477 2 10 1.55228 10 1ZM0.29289 9.2929C0.68342 8.9024 1.31658 8.9024 1.70711 9.2929L3.5 11.0858L5.29289 9.2929C5.68342 8.9024 6.3166 8.9024 6.7071 9.2929C7.0976 9.6834 7.0976 10.3166 6.7071 10.7071L4.91421 12.5L6.7071 14.2929C7.0976 14.6834 7.0976 15.3166 6.7071 15.7071C6.3166 16.0976 5.68342 16.0976 5.29289 15.7071L3.5 13.9142L1.70711 15.7071C1.31658 16.0976 0.68342 16.0976 0.29289 15.7071C-0.0976299 15.3166 -0.0976299 14.6834 0.29289 14.2929L2.08579 12.5L0.29289 10.7071C-0.0976299 10.3166 -0.0976299 9.6834 0.29289 9.2929ZM2 3.5C2 2.67157 2.67157 2 3.5 2C4.32843 2 5 2.67157 5 3.5C5 4.32843 4.32843 5 3.5 5C2.67157 5 2 4.32843 2 3.5ZM3.5 0C1.567 0 0 1.567 0 3.5C0 5.433 1.567 7 3.5 7C5.433 7 7 5.433 7 3.5C7 1.567 5.433 0 3.5 0ZM12.5 11C11.6716 11 11 11.6716 11 12.5C11 13.3284 11.6716 14 12.5 14C13.3284 14 14 13.3284 14 12.5C14 11.6716 13.3284 11 12.5 11ZM9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5ZM10 7C10.5523 7 11 6.5523 11 6C11 5.44772 10.5523 5 10 5C9.4477 5 9 5.44772 9 6C9 6.5523 9.4477 7 10 7ZM9 8C9 8.5523 8.5523 9 8 9C7.4477 9 7 8.5523 7 8C7 7.4477 7.4477 7 8 7C8.5523 7 9 7.4477 9 8ZM12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z"
              fill="#808191"
            />
          </svg>
        ),
      },
      {
        label: "Music",
        link: "/music",
        icon: <FaMusic />,
      },
      {
        label: "Live Gaming",
        link: "/live-gaming",
        icon: <IoGameControllerOutline />,
      },
      {
        label: "Settings",
        link: "/settings",
        icon: <IoSettingsOutline />,
      },
      {
        label: "Packages",
        link: "/packages",
        icon: <LuPackagePlus />,
      },
    ],
    count: 2,
  },
  {
    flag: true,
    link: "",
    label: "",
    links: [
      {
        label: "CreateStudio",
        link: "/dashboard1",
        icon: <IoSettingsOutline />,
      },
      {
        label: "Support",
        link: "/support",
        icon: <BiSupport />,
      },
      {
        label: "About",
        link: "/about",
        icon: <FaRegUser />,
      },
    ],
    count: 3,
  },
];

const settingsData = [
  {
    flag: true,
    link: "",
    label: "Creator Dashboard",

    links: [
      {
        label: "Dashboard",
        link: "/dashboard1",
        icon: <GoHomeFill />,
      },
      {
        label: "Media",
        link: "/media",
        icon: <TiMediaPlay />,
      },
      {
        label: "Analytics",
        link: "/analytics",
        icon: <SiGoogleanalytics />,
      },
      {
        label: "My Earnings",
        link: "/my-earning",
        icon: <FaCircleDollarToSlot />,
      },
      {
        label: "Channel Settings",
        link: "/channel-setting",
        icon: <RiListSettingsFill />,
      },
    ],
    count: 1,
  },
  {
    flag: false,
    link: "",
    label: "Stream Manager",
    links: [
      {
        label: "Stream Setting",
        link: "/stream-setting",
        icon: <TbLivePhoto />,
      },
      {
        label: "Web Cam",
        link: "/web-cam",
        icon:  <BsWebcam />,
      },
      {
        label: "Manage Stream",
        link: "/manage-stream",
        icon: <CiStreamOn />,
      },
    ],
    count: 2,
  },
  {
    flag: true,
    link: "",
    label: "",
    links: [
      {
        label: "Support",
        link: "/support",
        icon: <BiSupport />,
      },
    ],
    count: 3,
  },
];

// eslint-disable-next-line react/prop-types
export function NavbarSimple({ signinOpen, signupOpen }) {
  const location = useLocation()
  const [active, setActive] = useState("Discover");
  const [navSection, setNavSection] = useState("main"); 

  const currentData = navSection === "CreateStudio" ? settingsData : data; 

  useEffect(() => {
		const findMatchingPath = () => {
			const pathsToCheck = []
			let currentPath = location.pathname

			while (currentPath) {
				pathsToCheck.push(currentPath)
				const lastIndex = currentPath.lastIndexOf('/')
				currentPath = lastIndex > 0 ? currentPath.slice(0, lastIndex) : ''
			}

			for (const path of pathsToCheck) {
				const activeLink = data.flatMap((item) => item.links).find((link) => link.link === path)
				if (activeLink) return activeLink.label
			}

			return 'Discover'
		}

		const activeLabel = findMatchingPath()
		setActive(activeLabel)
	}, [location.pathname])

  const links = currentData.map((item, index) => (
    <div key={`section-${index}`} className="ml-3">
      <Text className={classes.textSec} size="sm">
        <span>{item.label}</span>
      </Text>
      {item.links?.map((link, linkIndex) => {
        const linkClass =
          navSection === "CreateStudio"
            ? link.label === "Support"
              ? `${classes.link} ${classes.settingsLink}`
              : classes.link
            : link.label === "CreateStudio"
            ? `${classes.link} ${classes.settingsLink}`
            : classes.link;

        return (
          <Link
            className={linkClass}
            data-active={link.label === active || undefined}
            to={link.link}
            key={`link-${index}-${linkIndex}`}
            onClick={() => {
              setActive(link.label);
              if (link.label === "CreateStudio") {
                setNavSection("CreateStudio"); // Switch to settings section
              }
            }}
          >
            {React.isValidElement(link.icon) &&
              React.cloneElement(link.icon, { className: classes.linkIcon })}
            <span>{link.label}</span>
          </Link>
        );
      })}

      {item.flag && <Divider mt={30} mb={40} />}
    </div>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <div className={classes.loginBtns}>
          <Button className="whiteBtn mb-" onClick={signinOpen}>
            Sign in
          </Button>
          <Button className="redBtn mb-" onClick={signupOpen}>
            Sign Up
          </Button>
        </div>
        {links}
        <LogOutUser />
      </div>
    </nav>
  );
}
