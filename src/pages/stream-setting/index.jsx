import SimplePage from "../../components/SimplePage";
import { Text, Divider } from "@mantine/core";
import { Grid } from '@mantine/core';
import { IoIosFlash } from "react-icons/io";
import "./style.css";
import {StreamSetting} from '../../data/StreamSetting';

const index = () => {
  return (
    <SimplePage>
      <Text className='page-title'>Channel settings</Text>
      <Divider className='mt-3' />

      <Grid className='mt-5'>
        {StreamSetting.map((data) => {
          return (
          <Grid.Col span={{ xs:12,sm: 6, md: 4, lg: 3 }} key={data.id}>
            <div className="stream-setting-boxes p-4">
              <div className="flash-icon">
                <IoIosFlash />
              </div>
              <h6 className='text-heading mt-3'>{data.heading}</h6>
            </div>
          </Grid.Col>
          )
        })}
       </ Grid>
    </SimplePage>
  )
}

export default index