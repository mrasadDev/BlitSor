import { Button, Group, TextInput } from '@mantine/core';
import { Grid } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import Verification from '../../components/Modals/Verification';

const Security = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className='security-box p-4 mt-3'>
        <Verification opened={opened} close={close} />
        <h5 className='font-18 text-heading'>Account Security</h5>
        <p className='font-14 font-weight-500 text-gray'>Manage your profile settings easily!</p>
     <div className="form">
            <TextInput
                withAsterisk
                label="Current password"
                placeholder="......."
                className='mt-2'
                type='password'
            />
            <TextInput
                withAsterisk
                label="New password"
                placeholder="......."
                className='mt-2'
                type='password'
            />
            <TextInput
                withAsterisk
                label="New confirm password"
                placeholder="......."
                className='mt-2'
                type='password'
            />
        </div>
        <div className="mobile-number pt-3">
            <h5 className='font-18 text-heading'>Mobile Number (Recommended)</h5>
            <p className='font-14 font-weight-500 text-gray'>Add your mobile number for account backup & recovery.</p>
            <Grid>
                <Grid.Col span={{ xs:4 , sm: 3, lg: 3 }}>
                    <TextInput
                        withAsterisk
                        label="Country code"
                        placeholder="1"
                        type='number'
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:8, sm: 7, lg: 7 }}>
                    <TextInput
                        withAsterisk
                        label="Mobile Number"
                        placeholder="123"
                    />
                </Grid.Col>
                <Grid.Col span={{ xs:12 ,sm: 2, lg: 2 }}>
                    <Group justify="flex-end" mt="lg">
                        <Button type="submit">Verify Number Now</Button>
                    </Group>
                </Grid.Col>
            </Grid>
            <p className='font-14 font-weight-500 text-gray mt-2'>Remove or change number</p>
        </div>
        <div className="two-factor mt-3">
            <h5 className='font-18 text-heading'>Two Factor Authentication (Recommended)</h5>
            <p className='font-14 font-weight-500 text-gray'>Add your 2 factor autentication for account advanced login security.</p>
            <Button onClick={open}>Add 2 Factor Authentication Now</Button>
            <p className='font-14 font-weight-500 text-gray mt-2'>Change or Remove 2 factor authentication</p>
        </div>
    </div>
  )
}

export default Security;