import SimplePage from "../../components/SimplePage";
import { Text, Divider } from "@mantine/core";
import { Tabs } from '@mantine/core';
import AboutChannel from './AboutChannel';
import ChannelTheme from './ChannelTheme';
import Security from './Security';
import "./style.css";
import classes from "../../styles/Tabs.module.css";

const index = () => {
  return (
    <SimplePage>
      <Text className='page-title'>Channel settings</Text>
        <Divider className='mt-3 mb-3' />

      <Tabs defaultValue="AboutChannel" classNames={classes}>
        <Tabs.List>
          <Tabs.Tab value="AboutChannel" color="blue">About Channel</Tabs.Tab>
          <Tabs.Tab value="second" color="blue">
            Channel Theme
          </Tabs.Tab>
          <Tabs.Tab value="three" color="blue">Featured Content</Tabs.Tab>
          <Tabs.Tab value="four" color="blue">Security</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="AboutChannel" pt="xs">
          <AboutChannel />
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <ChannelTheme />
        </Tabs.Panel>
        <Tabs.Panel value="three" pt="xs">
         Coming Soon!
        </Tabs.Panel>
        <Tabs.Panel value="four" pt="xs">
          <Security />
        </Tabs.Panel>
      </Tabs>

    </SimplePage>
  )
}

export default index
