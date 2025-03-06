import { Button, Modal, Text, TextInput } from "@mantine/core";
import { useState } from "react";

const WithDrawModal = ({ opened, closed }) => {
  const [amount, setAmount] = useState("70.00");

  const handleChange = (e) => {
    console.log(e.target, "aaaaaa");
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
      setAmount(value);
    }
  };

  const handleBlur = () => {
    if (amount === "" || isNaN(amount)) {
      setAmount("0.00");
    } else {
      setAmount(parseFloat(amount).toFixed(2));
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={closed}
      centered
      withCloseButton={false}
      size={480}
      radius={20}
      padding={30}
    >
      <Text style={{ fontSize: "2rem", fontWeight: "bold" }}>Earnings</Text>
      <div className="title-amount mt-4">
        <Text style={{ fontSize: "1.3rem", color: "#2F2D2DB2" }}>Amount</Text>
        <TextInput
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            color: "#000",
            flex: 1,
          }}
          variant="default"
          size="xl"
          leftSection={"$"}
          defaultValue={`${amount}`}
          keyboardType="numeric"
          onChangeText={(text) => {
            const numericValue = text.replace(/[^0-9]/g, "");
            setAmount(numericValue);
          }}
        />
      </div>
      <div className="transfer=to mt-4">
        <Text style={{ fontSize: "1.3rem", color: "#2F2D2DB2" }}>
          Transfer To
        </Text>
        <div className="d-flex">
          <div className="ring"></div>
          <Text
            style={{ fontSize: "1.3rem", color: "#2F2D2D", marginLeft: "1rem" }}
          >
            Payoneer Account
          </Text>
        </div>
        <div className="d-flex mt-5 justify-content-end">
          <div
            style={{
              fontSize: "1.3rem",
              color: "#2F2D2D",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
            onClick={closed}
          >
            Cancel
          </div>
          <Button variant="danger" className="ms-3">
            Transfer and Withdrawal
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WithDrawModal;
