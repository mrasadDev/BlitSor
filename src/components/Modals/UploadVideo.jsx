import { Grid, Modal, Text, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./style.css";
import FileBtn from "../file-button/FileBtn";
import VideoProcess from "./VideoProcess";

const UploadVideo = ({ VideoPopOpened, videoPopClose }) => {
  const [
    VideoProcessOpened,
    { open: VideoProcessOpen, close: VideoProcessClose },
  ] = useDisclosure(false);
  const handleOpen = () => {
    videoPopClose();
    VideoProcessOpen();
  };
  return (
    <>
      <VideoProcess opened={VideoProcessOpened} closed={VideoProcessClose} />
      <Modal
        className="upload-modal"
        opened={VideoPopOpened}
        onClose={videoPopClose}
        centered
        withCloseButton={false}
        size={700}
        padding={30}
        radius={20}
      >
        <h6>Upload video on Blitsor!</h6>
        <div className="upload-section mt-4 text-center">
          <figure className="mb-2">
            <img src="images/upload.png" alt="..." />
          </figure>
          <Text>Drag your file(s) to start uploading</Text>
          <span className="text-secondary d-block">OR</span>
          <FileBtn title="Browse File" width={false} justify="center" />
        </div>
        <Text className="mt-2">
          Only support .mp4, .mkv and .webm files can be uploaded.
        </Text>
        <Grid>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button className="whiteBtn" fullWidth onClick={videoPopClose}>
              Cancel
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button className="redBtn" fullWidth onClick={handleOpen}>
              Next
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
};

export default UploadVideo;
