import { Button, Group, Textarea, TextInput, Grid, rem, } from '@mantine/core';
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaCheck } from "react-icons/fa";

const AboutChannel = () => {

    const iconUser = (
        <>
            <CiUser style={{ width: rem(18), height: rem(18), color: "black" }} />
        </>
      );

      const iconCalender = (
        <>
            <SlCalender style={{ width: rem(18), height: rem(18), color: "black" }} />
        </>
      );

      const iconCheck = (
        <>
            <FaCheck style={{ width: rem(18), height: rem(18), color: "black" }} />
        </>
      );

  return (
    <div className='about-channel-box p-4 mt-3'>
        <figure>
            <img src="images/About-Channel-Porfile.png" alt="img" />
        </figure>
        <div className="profile-name d-flex mt-3">
            <h5 className='mb-0 me-2 font-18 text-heading'>Sarah Johnson</h5>
            <span>New user</span>
        </div>
        <p className='font-14 font-weight-500 text-gray'>Manage your profile settings easily!</p>
        <div className="form">
            <Grid>
                <Grid.Col span={{ xs:12, sm: 10.2, lg: 10.2 }}>
                    <TextInput
                        withAsterisk
                        label="Username"
                        placeholder="SarahJohnson.170"
                        leftSection={iconUser}
                        rightSection={iconCheck}
                        mb={10}
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:12 , sm: 1.8, lg: 1.8 }}>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Save</Button>
                    </Group>
                </Grid.Col>
            </Grid>
            <TextInput
                withAsterisk
                label="Display Name"
                placeholder="Sarah Johnson"
                leftSection={iconUser}
                className='mt-2'
                mb={10}
            />
            <Textarea
                withAsterisk
                label="Channel bio"
                placeholder="Welcome to my stream! i am Sarah and today i’ll be playing dota 2 on a live stream with my crew, On this channel you see me playing all genre games like GTA V, RDR 2, COD and Stream Games... 
                Subscribe and Follow now for more updates...Cheers"
                className='mt-2'
                size='lg'
                mb={10}
            />
            <TextInput
                withAsterisk
                label="Language (required)"
                placeholder="Day"
                className='mt-2'
                leftSection={iconCalender}
                mb={10}
            />
            <TextInput
                withAsterisk
                label="Country (required)"
                placeholder="Day"
                className='mt-2'
                leftSection={iconCalender}
                mb={10}
            />
            <p className='font-14 font-weight-500 text-gray'>Save my login details for next time.</p>
        </div>

        <div className="mobile-number">
            <h5 className='mb-0 font-18 text-heading'>Mobile Number (Recommended)</h5>
            <p className='font-14 font-weight-500 text-gray'>Add your mobile number for account backup & recovery.</p>
            <Grid>
                <Grid.Col span={{ xs:4 , sm: 3, lg: 3 }} className='url-inputs'>
                    <TextInput
                        withAsterisk
                        label="Facebook Url"
                        placeholder="http://facebook.com/"
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:8, sm: 7, lg: 7 }}>
                    <TextInput
                        withAsterisk
                        label="User id"
                        placeholder="Username"
                        leftSection={iconUser}
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:12 ,sm: 2, lg: 2 }}>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Save</Button>
                    </Group>
                </Grid.Col>
            </Grid>
            <Grid className='mt-2'>
                <Grid.Col span={{ xs:4 , sm: 3, lg: 3 }} className='url-inputs'>
                    <TextInput
                        withAsterisk
                        label="Twitter Url"
                        placeholder="http://twitter.com/"
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:8, sm: 7, lg: 7 }}>
                    <TextInput
                        withAsterisk
                        label="User id"
                        placeholder="Username"
                        leftSection={iconUser}
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:12 ,sm: 2, lg: 2 }}>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Save</Button>
                    </Group>
                </Grid.Col>
            </Grid>
            <Grid className='mt-2'>
                <Grid.Col span={{ xs:4 , sm: 3, lg: 3 }} className='url-inputs'>
                    <TextInput
                        withAsterisk
                        label="Instagram Url"
                        placeholder="http://instagram.com/"
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:8, sm: 7, lg: 7 }}>
                    <TextInput
                        withAsterisk
                        label="User id"
                        placeholder="Username"
                        leftSection={iconUser}
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:12 ,sm: 2, lg: 2 }}>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Save</Button>
                    </Group>
                </Grid.Col>
            </Grid>
            <Grid className='mt-2'>
                <Grid.Col span={{ xs:4 , sm: 3, lg: 3 }} className='url-inputs'>
                    <TextInput
                        withAsterisk
                        label="Tiktok Url"
                        placeholder="http://tiktok.com/"
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:8, sm: 7, lg: 7 }}>
                    <TextInput
                        withAsterisk
                        label="User id"
                        placeholder="Username"
                        leftSection={iconUser}
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:12 ,sm: 2, lg: 2 }}>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Save</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </div>
    </div>
  )
}

export default AboutChannel;