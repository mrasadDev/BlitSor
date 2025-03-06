import { Modal, Button, Grid } from '@mantine/core';
import OTP from "../otp/Otp";
import { BsTelephoneInbound } from "react-icons/bs";

export default function Verification({opened, close}) {

  return (
    <>
      <Modal opened={opened} onClose={close}  size={480}
        radius={20}
        padding={20}>
        <div className="verification">
          <div className="telephone-icon">
            <BsTelephoneInbound className='font-bold' size="lg" fontWeight={800}/>
          </div>
          <h6 className='mt-3'>Please check your SMS.</h6>
          <p>We've sent a code to number by SMS</p>
          <OTP />
          <p className='mt-2'>Didn’t get a code? <a href="#">Click to resend.</a></p>
        </div>
        <Grid ml={30}>
          <Grid.Col span={{ base: 6, md: 6, lg: 5.5 }}>
            <Button className="whiteBtn" fullWidth onClick={close}>
              Cancel
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6, lg: 5.5 }}>
            <Button className="redBtn" fullWidth>
              Verify
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>

    </>
  );
}