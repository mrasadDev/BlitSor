import {  Modal, Text, Button } from "@mantine/core";
import "./style.css";
import FileBtn from "../file-button/FileBtn"


const UploadBanner = ({ BannerPopOpened, BannerPopClose }) => {
  return (
    <>
      <Modal
        className="upload-modal"
        opened={BannerPopOpened}
        onClose={BannerPopClose}
        centered
        withCloseButton={false}
        size={700}
        padding={30}
        radius={20}
      >
        <h6>Upload Channel Banner!</h6>
        <div className="upload-section mt-4 text-center">
          <figure className="mb-2">
            <img src="images/upload-cloud.svg" alt="..." />
          </figure>
          <Text>Drag your file(s) to start uploading</Text>
          <span className="text-secondary d-block">OR</span>
          <FileBtn title="Browse File" width={false}/>
        </div>
        <Text className="mt-2">
        An image that's 150x150 pixels is recommended. Use a PNG, GIF (without animations), BMP or JPEG file that's 1MB or less.
        </Text>
        <Button className="whiteBtn" fullWidth onClick={BannerPopClose}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

export default UploadBanner;