import { Button, Group, Text, TextInput } from "@mantine/core";
import { Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Verification from "../../components/Modals/Verification";

const Security = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="security-box p-4 mt-3">
      <Verification opened={opened} close={close} />
      <h5 className="font-18 text-heading">Account Security</h5>
      <Text className="title" size="xs" mb={10}>
        Manage your profile settings easily!
      </Text>
      <div className="form">
        <TextInput
          withAsterisk
          label="Current password"
          placeholder="......."
          className="mt-2"
          type="password"
          size="md"
          radius={10}
        />
        <TextInput
          withAsterisk
          label="New password"
          placeholder="......."
          className="mt-2"
          type="password"
          size="md"
          radius={10}
        />
        <TextInput
          withAsterisk
          label="New confirm password"
          placeholder="......."
          className="mt-2"
          type="password"
          size="md"
          radius={10}
        />
      </div>
      <div className="mobile-number pt-3">
        <h5 className="font-18 text-heading">Mobile Number (Recommended)</h5>
        <Text className="title" size="xs" mb={10}>
          Add your mobile number for account backup & recovery.
        </Text>
        <Grid>
          <Grid.Col span={{ xs: 4, sm: 3, lg: 3 }}>
            <TextInput
              withAsterisk
              label="Country code"
              placeholder="1"
              type="number"
              size="md"
              radius={10}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 8, sm: 7, lg: 7 }}>
            <TextInput
              withAsterisk
              label="Mobile Number"
              placeholder="123"
              size="md"
              radius={10}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 2, lg: 2 }}>
            <Group justify="flex-end" mt="lg">
              <Button type="submit" size="md" radius={10}>
                Verify Number Now
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
        <Text className="title b-bb" size="sm" mb={10}>
          Remove or change number
        </Text>
      </div>
      <div className="two-factor mt-3">
        <h5 className="font-18 text-heading">
          Two Factor Authentication (Recommended)
        </h5>
        <Text className="title" size="xs" mb={10}>
          Add your 2 factor authentication for account advanced login security.
        </Text>
        <Button onClick={open} size="md" radius={10}>
          Add 2 Factor Authentication Now
        </Button>
        <Text className="title b-b" size="sm" mb={10}>
          Change or Remove 2 factor authentication
        </Text>
      </div>
    </div>
  );
};

export default Security;
