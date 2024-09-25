import React from "react";
import { Grid, Button, Autocomplete, AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UploadVideo from "../../components/Modals/UploadVideo";

const SearchBar = () => {
  const iconSearch = () => (
    <>
      <IconSearch style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );
  const [VideoPopOpened, { open: videoPopOpen, close: videoPopClose }] =
    useDisclosure(false);

  return (
    <>
      <UploadVideo
        VideoPopOpened={VideoPopOpened}
        videoPopClose={videoPopClose}
      />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Autocomplete
            className="media-search-bar"
            placeholder="Search"
            variant="filled"
            rightSection={iconSearch}
            radius={10}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <div className="media-btns">
            <Button onClick={videoPopOpen} className="redBtn mt-0">
              Upload Video
            </Button>
            <Button className="redBtn mt-0">Go Live</Button>
            <BsThreeDotsVertical className="text-secondary" />
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default SearchBar;
