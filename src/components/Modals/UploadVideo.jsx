import { Grid, Modal, Text, Button, FileButton, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./style.css";
import VideoProcess from "./VideoProcess";
import { useState } from "react";

const UploadVideo = ({ VideoPopOpened, videoPopClose }) => {
  const [file, setFile] = useState(null);
  const [
    VideoProcessOpened,
    { open: VideoProcessOpen, close: VideoProcessClose },
  ] = useDisclosure(false);
  const handleOpen = () => {
    videoPopClose();
    VideoProcessOpen();
  };

  const [preview, setPreview] = useState(null);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <VideoProcess
        opened={VideoProcessOpened}
        closed={VideoProcessClose}
        selectedVideo={preview}
      />
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
          <FileButton
            accept="image/png,image/jpeg,video/mp4"
            onChange={handleFileChange}
          >
            {(props) => <Button {...props}>Browse File</Button>}
          </FileButton>
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
