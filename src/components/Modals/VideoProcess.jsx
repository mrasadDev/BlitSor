import { useState } from "react";
import {
  Stepper,
  rem,
  Modal,
  Text,
  Button,
  Textarea,
  TextInput,
  Grid,
  FileButton,
  Group,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { FaDotCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { TbLocation } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { Radio, Stack, Checkbox, ScrollArea } from "@mantine/core";
import ReactPlayer from "react-player";
import "./style.css";

const VideoProcess = ({ opened, closed }) => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 1 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const iconCalender = (
    <>
      <CiCalendar style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );

  const iconLocation = (
    <>
      <TbLocation style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );

  const categoryIcon = (
    <>
      <MdOutlineCategory
        style={{ width: rem(18), height: rem(18), color: "black" }}
      />
    </>
  );

  return (
    <>
      <Modal
        opened={opened}
        onClose={closed}
        centered
        withCloseButton={false}
        size={700}
        padding={30}
        radius={20}
      >
        <h6>Upload Videos Right away!</h6>
        <div className="my-4">
          <Stepper
            className="my-stepper"
            active={active}
            onStepClick={setActive}
            completedIcon={
              <IconCircleCheck style={{ width: rem(15), height: rem(15) }} />
            }
          >
            <Stepper.Step
              icon={<FaDotCircle style={{ width: rem(15), height: rem(15) }} />}
              label="Video details"
              description="Please provide your video details"
            >
              <ScrollArea
                style={{ width: "100%" }}
                type="hover"
                scrollbarSize={5}
                offsetScrollbars
              >
                <ReactPlayer
                  className="video-player"
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                />
              </ScrollArea>
              <TextInput
                type="text"
                label="Video Title"
                placeholder="What’ll be your video title?"
                radius={10}
                size="md"
              />
              <Textarea
                type="text"
                label="Description"
                placeholder="What’s your video about?"
                radius={10}
                size="md"
                mt="md"
              />
              <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                  <TextInput
                    label="Date"
                    placeholder="Date"
                    leftSection={iconCalender}
                    radius={10}
                    size="md"
                    mt="md"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                  <TextInput
                    label="Location"
                    placeholder="Location"
                    leftSection={iconLocation}
                    radius={10}
                    size="md"
                    mt="md"
                  />
                </Grid.Col>
              </Grid>
              <TextInput
                type="text"
                label="Video Category"
                leftSection={categoryIcon}
                placeholder="Select Catgory"
                radius={10}
                size="md"
                mt="md"
              />
            </Stepper.Step>
            <Stepper.Step
              icon={<FaDotCircle style={{ width: rem(15), height: rem(15) }} />}
              label="Video thumbnail & tags"
              description="Selection of your video tags & thumbnail"
            >
              <div className="thumbnail-section my-3">
                <Text className="sub-heading mb-2">Thumbnail</Text>
                <Grid>
                  <Grid.Col span={{ base: 6, md: 4, lg: 4 }}>
                    <div className="upload-file">
                      <figure>
                        <img src="images/upload-cloud.svg" alt="..." />
                      </figure>
                      <h6>Upload file</h6>
                    </div>
                  </Grid.Col>
                  <Grid.Col span={{ base: 6, md: 4, lg: 4 }}>
                    <div className="thumbnail-img">
                      <figure>
                        <img src="images/thumbnail-1.png" alt="..." />
                      </figure>
                      <h5>Selected</h5>
                    </div>
                  </Grid.Col>
                  <Grid.Col span={{ base: 6, md: 4, lg: 4 }}>
                    <div className="thumbnail-img">
                      <figure>
                        <img
                          src="images/thmubnail-2.png"
                          radius={20}
                          alt="..."
                        />
                      </figure>
                      <h5>Selected</h5>
                    </div>
                  </Grid.Col>
                </Grid>
              </div>
              <div className="video-tags-section mb-3">
                <Text className="sub-heading mb-2">Video Tags</Text>
                <div className="video-tags">
                  <ul className="list-unstyled mb-0">
                    <li>
                      360 Room Design <RxCross2 />
                    </li>
                    <li>
                      Room Design <RxCross2 />
                    </li>
                    <li>
                      2024 Interior Design <RxCross2 />
                    </li>
                    <li>
                      Best Interior Design
                      <RxCross2 />
                    </li>
                    <li>
                      DIY Interior <RxCross2 />
                    </li>
                    <li>
                      Rooms Tour <RxCross2 />
                    </li>
                    <li>
                      Interior Ideas <RxCross2 />
                    </li>
                    <li>
                      Interior Solutions <RxCross2 />
                    </li>
                  </ul>
                </div>
              </div>
              <Grid>
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
                  <Text className="sub-heading mb-2">Comments</Text>
                  <div className="d-block">
                    <Stack>
                      <Radio
                        checked
                        variant="outline"
                        onChange={() => {}}
                        label="On"
                      />
                      <Radio
                        variant="outline"
                        onChange={() => {}}
                        label="Off"
                      />
                    </Stack>
                  </div>
                </Grid.Col>
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
                  <Text className="sub-heading mb-2">Visibility</Text>
                  <Stack>
                    <Radio
                      checked
                      variant="outline"
                      onChange={() => {}}
                      label="Public"
                    />
                    <Radio
                      variant="outline"
                      onChange={() => {}}
                      label="Private"
                    />
                    <Radio
                      variant="outline"
                      onChange={() => {}}
                      label="Draft (Temporary)"
                    />
                    <Radio
                      variant="outline"
                      onChange={() => {}}
                      label="Rating"
                    />
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
                  <Text className="sub-heading mb-2">Audience Type</Text>
                  <Stack>
                    <Radio
                      checked
                      variant="outline"
                      onChange={() => {}}
                      label="For Everybody"
                    />
                    <Radio
                      variant="outline"
                      onChange={() => {}}
                      label="For Kids"
                    />
                    <Radio
                      variant="outline"
                      onChange={() => {}}
                      label="For Adults"
                    />
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
                  <Text className="sub-heading mb-2">Altered content</Text>
                  <Stack>
                    <Radio
                      checked
                      variant="outline"
                      onChange={() => {}}
                      label="Yes"
                    />
                    <Radio variant="outline" onChange={() => {}} label="No" />
                    <Radio
                      variant="outline"
                      onChange={() => {}}
                      label="Not Sure"
                    />
                  </Stack>
                </Grid.Col>
              </Grid>
              <Text className="sub-heading">Subtitles</Text>
              <Group justify="start" className="my-3">
                <FileButton accept="image/png,image/jpeg">
                  {(props) => (
                    <Button className="pink-btn" {...props}>
                      Attach Subtitle File
                    </Button>
                  )}
                </FileButton>
              </Group>
              <Checkbox
                checked
                variant="outline"
                onChange={() => {}}
                label="I have read the terms and conditions and I hereby accept and agree to the terms and conditions"
              />
            </Stepper.Step>
          </Stepper>
        </div>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Button className="whiteBtn" onClick={prevStep} fullWidth>
              Back
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Button className="redBtn" onClick={nextStep} fullWidth>
              {active > 0 ? "Upload Video" : "Next"}
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
};

export default VideoProcess;
