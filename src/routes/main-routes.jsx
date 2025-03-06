import Home from "../pages/home";
import Streaming from "../pages/streaming";
import PlayList from "../pages/playlist";
import LiveStream from "../pages/live-stream";
import LiveSport from "../pages/live-sports";
import Music from "../pages/music";
import LiveGaming from "../pages/live-gaming";
import Support from "../pages/support";
import Settings from "../pages/settings";
import OpenVideo from "../components/Open-Video/OpenVideo";
import RecommendedVideo from "../components/Open-Video/RecommendedVideo";
import ChannelDetail from "../pages/channel-detail";
import BlitsContainer from "../pages/blits/BlitsContainer";
import LiveVideo from "../components/LiveVideo/LiveVideo";
import SearchList from "../components/SerachPage";
import WalletDetail from "../pages/wallet/WalletDetail";
import Packages from "../pages/packages/Packages";
import UserDetail from "../pages/user-detail/UserDetail";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blits",
    element: <BlitsContainer />,
  },
  {
    path: "/streaming",
    element: <Streaming />,
  },
  {
    path: "/play-list",
    element: <PlayList />,
  },
  {
    path: "/live-sport",
    element: <LiveSport />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/live-gaming",
    element: <LiveGaming />,
  },
  {
    path: "/live-stream",
    element: <LiveStream />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/video-detail",
    element: <OpenVideo />,
  },
  {
    path: "/recommended-video-detail",
    element: <RecommendedVideo />,
  },
  {
    path: "/channel-detail",
    element: <ChannelDetail />,
  },
  {
    path: "/live-video",
    element: <LiveVideo />,
  },
  {
    path: "/search",
    element: <SearchList />,
  },
  {
    path: "/wallet-detail",
    element: <WalletDetail />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/about",
    element: <UserDetail />,
  },
];

export default routes;
