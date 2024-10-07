import Home from "../pages/home";
import Blits from "../pages/blits";
import Streaming from "../pages/streaming";
import PlayList from "../pages/playlist";
import LiveStream from "../pages/live-stream";
import LiveSport from "../pages/live-sports";
import Music from "../pages/music";
import LiveGaming from "../pages/live-gaming";
import Support from "../pages/support";
import OpenVideo from "../components/Open-Video/OpenVideo";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blits",
    element: <Blits />,
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
    path: "/support",
    element: <Support />,
  },
  {
    path: "/video-detail",
    element: <OpenVideo />,
  },
];

export default routes;
