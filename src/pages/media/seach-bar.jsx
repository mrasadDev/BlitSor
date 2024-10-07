import { Grid, Button, Autocomplete, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UploadVideo from "../../components/Modals/UploadVideo";
import StreamInfo from "../../components/Modals/StreamInfo";

const SearchBar = () => {
  const iconSearch = () => (
    <>
      <IconSearch style={{ width: rem(18), height: rem(18), color: "black" }} />
    </>
  );
  const [VideoPopOpened, { open: videoPopOpen, close: videoPopClose }] =
    useDisclosure(false);

  const [LiveOpened, { open: livePopOpen, close: livePopClose }] =
    useDisclosure(false);

  return (
    <>
      <UploadVideo
        VideoPopOpened={VideoPopOpened}
        videoPopClose={videoPopClose}
      />
      <StreamInfo LiveOpened={LiveOpened} livePopClose={livePopClose} />

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
            <Button onClick={livePopOpen} className="redBtn mt-0">
              Go Live
            </Button>
            <BsThreeDotsVertical className="text-secondary" />
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default SearchBar;
