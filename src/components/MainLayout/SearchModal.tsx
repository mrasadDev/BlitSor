import {
  Button,
  Divider,
  Grid,
  Modal,
  Radio,
  Stack,
  Text,
} from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import React from "react";
import { CgLock } from "react-icons/cg";

const SearchModal = ({ opened, closed }) => {
  return (
    <Modal
      opened={opened}
      onClose={closed}
      title=""
      size="xl"
      centered
      withCloseButton={false}
      radius={20}
      padding={22}
    >
      <div className="text-start">
        <div className="logout-User lock-icon">
          <IconFilter size={30} color="#FF0045" cursor="pointer" />
        </div>
        <div>
          <Text className="fw-semibold fs-5 mt-3" size="lg">
            Search Filter
          </Text>
        </div>
      </div>
      <Divider mb={25} />
      <Grid mt={20}>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">DURATION</Text>
          <div className="d-block">
            <Stack>
              <Radio
                checked
                variant="outline"
                onChange={() => {}}
                label="Any"
              />
              <Radio
                variant="outline"
                onChange={() => {}}
                label="Short(1 - 5 min )"
              />
              <Radio
                variant="outline"
                onChange={() => {}}
                label="Medium(5 - 10 min )"
              />
              <Radio
                variant="outline"
                onChange={() => {}}
                label="Long(Over 20 min )"
              />
            </Stack>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">SORT BY</Text>
          <Stack>
            <Radio
              checked
              variant="outline"
              onChange={() => {}}
              label="Relevance"
            />
            <Radio variant="outline" onChange={() => {}} label="Upload Count" />
            <Radio variant="outline" onChange={() => {}} label="View Count" />
            <Radio variant="outline" onChange={() => {}} label="Rating" />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">DATE UPLOADED</Text>
          <Stack>
            <Radio variant="outline" onChange={() => {}} label="Any" />
            <Radio
              variant="outline"
              onChange={() => {}}
              label="Last 24 hours"
            />
            <Radio variant="outline" onChange={() => {}} label="Last 7 Days" />
            <Radio variant="outline" onChange={() => {}} label="Last 30 Days" />
            <Radio
              variant="outline"
              onChange={() => {}}
              label="Last 365 Days"
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">RESOLUTION</Text>
          <Stack>
            <Radio variant="outline" onChange={() => {}} label="Any" />
            <Radio variant="outline" onChange={() => {}} label="HD" />
            <Radio variant="outline" onChange={() => {}} label="2K" />
            <Radio variant="outline" onChange={() => {}} label="4K" />
            <Radio variant="outline" onChange={() => {}} label="Not Sure" />
          </Stack>
        </Grid.Col>
      </Grid>
      <Divider mt={25} />
      <Grid mt={20}>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">PRICE</Text>
          <div className="d-block">
            <Stack>
              <Radio
                checked
                variant="outline"
                onChange={() => {}}
                label="Any"
              />
              <Radio variant="outline" onChange={() => {}} label="Free" />
              <Radio variant="outline" onChange={() => {}} label="Paid" />
            </Stack>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">BLITSOR 360</Text>
          <Stack>
            <Radio checked variant="outline" onChange={() => {}} label="Any" />
            <Radio variant="outline" onChange={() => {}} label="Spatial" />
            <Radio variant="outline" onChange={() => {}} label="360 Only" />
            <Radio variant="outline" onChange={() => {}} label="Rating" />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">TYPE</Text>
          <Stack>
            <Radio variant="outline" onChange={() => {}} label="Any" />
            <Radio variant="outline" onChange={() => {}} label="Video" />
            <Radio variant="outline" onChange={() => {}} label="360" />
            <Radio variant="outline" onChange={() => {}} label="Live" />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
          <Text className="sub-heading mb-2">PRICE</Text>
          <Stack>
            <Radio variant="outline" onChange={() => {}} label="Any" />
            <Radio variant="outline" onChange={() => {}} label="Free" />
            <Radio variant="outline" onChange={() => {}} label="Paid" />
          </Stack>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={6}>
          <Button className="whiteBtn padding1" size="lg" onClick={closed}>
            Cancel
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button className="redBtn padding1" size="lg">
            Confirm
          </Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
};

export default SearchModal;
