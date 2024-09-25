import { Button } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { Grid } from '@mantine/core';
import UploadBanner from '../../components/Modals/UploadBanner';
import AddWatermark from '../../components/Modals/AddWatermark';
import { useDisclosure } from "@mantine/hooks";
import { BannerImages } from '../../data/BannerImages';

const ChannelTheme = () => {
    const [BannerPopOpened, { open: BannerPopOpen, close: BannerPopClose }] =
    useDisclosure(false);

    const [WatermarkPopOpened, { open: WatermarkPopOpen, close: WatermarkPopClose }] =
    useDisclosure(false);
  return (
    <>
    <UploadBanner
        BannerPopOpened={BannerPopOpened}
        BannerPopClose={BannerPopClose}
      />

      <AddWatermark
        WatermarkPopOpened={WatermarkPopOpened}
        WatermarkPopClose={WatermarkPopClose}
      />

        <div className='channel-theme-box p-4 mt-3'>
            <div className="channel-theme-heading mb-3">
                <h5 className='font-18 text-heading'>Channel Theme Settings</h5>
                <p className='font-14 font-weight-500 text-gray'>Manage your profile settings easily!</p>
            </div>
            <div className="channel-theme-profile d-flex align-items-center">
                <figure className='profile-pic'>
                    <img src="images/About-Channel-Porfile.png" alt="img" className='me-4' />
                </figure>
            <div className="chennel-add-profile">
                <p className='font-14 font-weight-500 text-gray'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
                <Button>Add Profile Picyure</Button>
            </div>
            </div>
            <div className="upload-custome-banner mt-4">
                <h5 className='font-18 text-heading'>Channel Banner</h5>
                <p className='font-14 font-weight-500 text-gray'>Add your mobile number for account backup & recovery.</p>
                <div className="upload-banner">
                    <h5 className='font-18 text-heading'>Upload Custom Banner</h5>
                    <p className='font-14 font-weight-500 text-gray'>The Banner must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
                    <Button onClick={BannerPopOpen}><FaPlus className='me-1' /> Upload Banner</Button>
                </div>
                <div className="images mt-3">
                {BannerImages.map((data) => {
                    return (
                        <figure key={data.id}>
                            <img src={data.img} alt="img" />
                        </figure>
                        )
                    })} 
                </div>
            </div>
            <div className="theme-color mt-4">
                <h5 className='font-18 text-heading'>Profile Theme Color</h5>
                <p className='font-14 font-weight-500 text-gray'>Add your mobile number for account backup & recovery.</p>
                <figure>
                    <img src="images/theme-colors.png" alt="img" />
                    <FaPlus className='plus-icon' />
                </figure>
                <Button className='mt-2'>Reset to Default</Button>
            </div>
            <div className="channel-watermark mt-4">
                <h5 className='font-18 text-heading'>Channel Watermark</h5>
                <p className='font-14 font-weight-500 text-gray'>Add or change your channel watermark that users can recognize in your videos</p>
                <Grid>
                    <Grid.Col span={{ xs:12,sm: 6, md: 5, lg: 5 }}>
                        <div className="add-watermark">
                            <p className='font-14 font-weight-500 text-gray'>Add Brand Water which must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
                            <Button onClick={WatermarkPopOpen}><FaPlus className='me-1' /> Add Watermark</Button>
                        </div>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={{ xs:12,sm: 6, md: 5, lg: 5 }}>
                        <div className="add-watermark">
                            <figure>
                                <img src="images/watermark.png" alt="img" />
                            </figure>
                        </div>
                    </Grid.Col>
                </Grid>
                <p className='font-14 font-weight-500 text-gray mt-2'>Remove Brand Watermark</p>
            </div>
        </div>

    </>
  )
}

export default ChannelTheme;