import { Button, FileButton, Group, Text } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { Grid } from "@mantine/core";
import { useState } from "react";

const ChannelTheme = () => {
  const [preview, setPreview] = useState(null);
  const [previewBanner, setPreviewBanner] = useState(null);
  const [previewWatermark, setPreviewWatermark] = useState(null);

  const handleFileChange = (selectedFile) => {

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFileBannerChange = (selectedFile) => {

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewBanner(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleWatermarkChange = (selectedFile) => {

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewWatermark(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <div className="channel-theme-box p-4 mt-3">
        <div className="channel-theme-heading mb-3">
          <h5 className="font-18 text-heading">Channel Theme Settings</h5>
          <p className="font-14 font-weight-500 text-gray">
            Manage your profile settings easily!
          </p>
        </div>
        <div className="channel-theme-profile d-flex align-items-center">
          <div className="profile-img">
            {preview && (
              <figure className="profile-pic">
                <img src={preview} alt="img" />
              </figure>
            )}
          </div>
          <div className="chennel-add-profile">
            <p className="font-14 font-weight-500 text-gray">
              Must be JPEG, PNG, or GIF and cannot exceed 10MB.
            </p>
            <Group justify="start">
              <FileButton
                onChange={handleFileChange}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button {...props} size="md" radius={10}>
                    Add Profile Picture
                  </Button>
                )}
              </FileButton>
            </Group>
          </div>
        </div>
        <div className="upload-custome-banner mt-4">
          <h5 className="font-18 text-heading">Channel Banner</h5>
          <p className="font-14 font-weight-500 text-gray">
            The Banner must be JPEG, PNG, or GIF and cannot exceed 10MB.
          </p>
          <div className="upload-banner">
            <h5 className="font-18 text-heading">Upload Custom Banner</h5>
            <p className="font-14 font-weight-500 text-gray">
              Must be JPEG, PNG, or GIF and cannot exceed 10MB.
            </p>
            <Group justify="center">
              <FileButton
                onChange={handleFileBannerChange}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button {...props} size="md" radius={10}>
                    <FaPlus className="me-1" /> Upload Banner
                  </Button>
                )}
              </FileButton>
            </Group>
          </div>
          <div className="banner-img mt-3">
            {previewBanner && (
              <figure className="banner-img1">
                <img
                  src={previewBanner}
                  alt="Banner Preview"
                  style={{
                    width: "100%",
                    height: "349px",
                    objectFit: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </figure>
            )}
          </div>
        </div>
        <Text className="title b-bt" size="sm" mb={10}>
          Remove or change banner
        </Text>
        <div className="theme-color mt-4">
          <h5 className="font-18 text-heading">Profile Theme Color</h5>
          <p className="font-14 font-weight-500 text-gray">
            Add your mobile number for account backup & recovery.
          </p>
          <figure>
            <img src="images/theme-colors.png" alt="img" />
            <FaPlus className="plus-icon" />
          </figure>
          <Button className="mt-2">Reset to Default</Button>
        </div>
        <div className="channel-watermark mt-4">
          <h5 className="font-18 text-heading">Channel Watermark</h5>
          <p className="font-14 font-weight-500 text-gray">
            Add or change your channel watermark that users can recognize in
            your videos
          </p>
          <Grid>
            <Grid.Col span={{ xs: 12, sm: 6, md: 5, lg: 5 }}>
              <div className="add-watermark">
                <p className="font-14 font-weight-500 text-gray">
                  Add Brand Water which must be JPEG, PNG, or GIF and cannot
                  exceed 10MB.
                </p>
                <Group justify="center">
              <FileButton
                onChange={handleWatermarkChange}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button {...props} size="md" radius={10}>
                    <FaPlus className="me-1" /> Upload Banner
                  </Button>
                )}
              </FileButton>
            </Group>
              </div>
            </Grid.Col>
          </Grid>
          <div className="watermark-img mt-3">
            {previewWatermark && (
              <figure className="banner-img1">
                <img
                  src={previewWatermark}
                  alt="Banner Preview"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </figure>
            )}
          </div>
          <Text className="title b-bt" size="sm" mb={10}>
            Remove Brand Watermark
          </Text>
        </div>
      </div>
    </>
  );
};

export default ChannelTheme;
