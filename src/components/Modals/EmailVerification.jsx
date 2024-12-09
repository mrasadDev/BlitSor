import { Modal, Button, Grid } from '@mantine/core';
import OTP from "../otp/Otp";
import { BsTelephoneInbound } from "react-icons/bs";

export default function EmailVerification({opened, closed}) {

  return (
    <>
      <Modal opened={opened} centered onClose={closed} withCloseButton={false} size={480}
        radius={20}
        padding={30}>
        <div className="verification">
          <div className="telephone-icon">
            <BsTelephoneInbound />
          </div>
          <h6 className='mt-3'>Please check your email.</h6>
          <p>We've sent a code to olivia@designfix.com</p>
          <OTP />
          <p className='mt-2'>Didn’t get a code?<a href="#">Click to resend.</a></p>
        </div>
        <Grid>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button className="whiteBtn" fullWidth onClick={closed}>
              Cancel
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button className="redBtn" fullWidth>
              Verify
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>

    </>
  );
}