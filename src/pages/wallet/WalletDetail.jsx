import SimplePage from "../../components/SimplePage";
import { Button, Grid, Group, Menu, Table, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import "./style.css";
import { useDisclosure } from "@mantine/hooks";
import WithDrawModal from "../../components/Modals/WithDrawModal";
import { useNavigate } from "react-router-dom";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";

const WalletDetail = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const [value, setValue] = useState([null, null]);

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <SimplePage>
      <WithDrawModal opened={opened} closed={close} />
      <Text
        style={{ fontSize: "3rem", color: "#2F2D2D", letterSpacing: "1px" }}
      >
        Wallet
      </Text>
      <Text
        style={{
          fontSize: "2rem",
          color: "#2F2D2D",
          letterSpacing: "1px",
          marginTop: "1rem",
        }}
      >
        Available Coins
      </Text>
      <div className="mt-4">
        <div className="available-coins">
          <Grid>
            <Grid.Col span={3} style={{ borderRight: "1px solid #2F2D2D" }}>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                Coins available for use
              </Text>
              <h2
                className="d-flex align-items-center"
                style={{
                  color: "#2F2D2D",
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  lineHeight: "72px",
                }}
              >
                10,000
                <img
                  src="/images/bitcoin.png"
                  alt="Coins"
                  width={40}
                  height={40}
                  className="ms-2"
                />
              </h2>
            </Grid.Col>
            <Grid.Col span={3} style={{ borderRight: "1px solid #2F2D2D" }}>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                Equivalent amount in USD:
              </Text>
              <h2
                style={{
                  color: "#2F2D2D",
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  lineHeight: "72px",
                }}
              >
                $657.25
              </h2>
            </Grid.Col>
            <Grid.Col
              span={3}
              style={{ display: "block", paddingLeft: "1rem" }}
            >
              <div>
                <Button variant="danger" className="mb-2" onClick={open}>
                  Withdraw Balance
                </Button>
              </div>
              <div>
                <Button
                  variant="danger"
                  style={{ padding: "1px 27px" }}
                  onClick={() => navigate("/packages")}
                >
                  Get More Coins
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </div>

        <Text
          style={{
            fontSize: "2rem",
            color: "#2F2D2D",
            letterSpacing: "1px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Recent Payments
        </Text>
        <div className="available-coins">
          <Grid>
            <Grid.Col span={3} style={{ borderRight: "1px solid #2F2D2D" }}>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                Payments being cleared
              </Text>
              <h3
                style={{
                  color: "#2F2D2D",
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  lineHeight: "72px",
                }}
              >
                $200.25
              </h3>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                1 payment
              </Text>
            </Grid.Col>
            <Grid.Col span={3} style={{ borderRight: "1px solid #2F2D2D" }}>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                Last Payment Cleared
              </Text>
              <h3
                style={{
                  color: "#2F2D2D",
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  lineHeight: "72px",
                }}
              >
                $457.25
              </h3>
            </Grid.Col>
            <Grid.Col span={3} style={{ borderRight: "1px solid #2F2D2D" }}>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                Expenses
              </Text>
              <h3
                style={{
                  color: "#2F2D2D",
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  lineHeight: "72px",
                }}
              >
                $23.23
              </h3>
            </Grid.Col>
            <Grid.Col span={3}>
              <Text
                size="lg"
                style={{ color: "#2F2D2D", letterSpacing: "1px" }}
              >
                Earnings to Date
              </Text>
              <h3
                style={{
                  color: "#2F2D2D",
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  lineHeight: "72px",
                }}
              >
                $1008.95
              </h3>
            </Grid.Col>
          </Grid>
        </div>
      </div>

      <div style={{ marginTop: "4rem" }}>
        <div>
          <Group className="mb-4">
            <DatePickerInput
              type="range"
              label=""
              placeholder="Date Range"
              value={value}
              onChange={setValue}
            />
            <Group>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button
                    radius={5}
                    variant="default"
                    style={{ border: "1px solid red", color: "#2F2D2D" }}
                  >
                    Activity
                    <IconChevronDown className="ml-1 mt-1" />
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>One</Menu.Item>
                  <Menu.Item>Two</Menu.Item>
                  <Menu.Item>Three</Menu.Item>
                  <Menu.Item>Four</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
          <Text
            size="lg"
            style={{ color: "#2F2D2D", letterSpacing: "1px" }}
            mb={5}
          >
            Showing result 1-50 of 102
          </Text>
        </div>
        <Table highlightOnHover withTableBorder verticalSpacing="md">
          <Table.Thead style={{ backgroundColor: "#D9D9D9" }}>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Activity</Table.Th>
              <Table.Th>Form</Table.Th>
              <Table.Th>Order</Table.Th>
              <Table.Th>Amount</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </SimplePage>
  );
};

export default WalletDetail;
