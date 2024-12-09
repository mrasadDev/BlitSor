import Dashboard from "../pages/dashboard";
import Media from "../pages/media";
import Analytics from "../pages/analytics";
import MyEarning from "../pages/my-earnings";
import ChannelSetting from "../pages/channel-setting";
import StreamSetting from "../pages/stream-setting";
import WebCam from "../pages/web-cam";
import ManageStream from "../pages/manage-stream";

const routes = [
  {
    path: "/dashboard1",
    element: <Dashboard />,
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/my-earning",
    element: <MyEarning />,
  },
  {
    path: "/channel-setting",
    element: <ChannelSetting />,
  },
  {
    path: "/stream-setting",
    element: <StreamSetting />,
  },
  {
    path: "/web-cam",
    element: <WebCam />,
  },
  {
    path: "/manage-stream",
    element: <ManageStream />,
  },
];

export default routes;
