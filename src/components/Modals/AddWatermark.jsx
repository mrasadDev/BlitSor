import { Grid, Modal, Button } from "@mantine/core";
import "./style.css";


const AddWatermar = ({ WatermarkPopOpened, WatermarkPopClose }) => {
  return (
    <>
      <Modal
        className="upload-modal wateramrk"
        opened={WatermarkPopOpened}
        onClose={WatermarkPopClose}
        centered
        withCloseButton={false}
        size={700}
        padding={30}
        radius={20}
      >
        <h6>Customize video watermark</h6>
        <div className="upload-section mt-4 text-center">
          <figure>
            <img src="images/add-watermark.png" alt="img" />
          </figure>
        </div>
        <Grid>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button className="whiteBtn" fullWidth onClick={WatermarkPopClose}>
              Cancel
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button className="redBtn" fullWidth>
              Save
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
};

export default AddWatermar;