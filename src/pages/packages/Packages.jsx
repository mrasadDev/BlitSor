import { Grid, Text, Title, rem } from "@mantine/core";
import SimplePage from "../../components/SimplePage";
import React from "react";

const pricingPlans = [
  {
    title: "IMMERSIVE STAR",
    description: "A beginner-friendly package for those new to the VR world.",
    coins: "1,000 Blitcoinz",
    price: "$9",
  },
  {
    title: "360 BOOST",
    description: "Perfect for those wanting a little extra to explore more.",
    coins: "3,000 Blitcoinz",
    price: "$19",
  },
  {
    title: "HOLOGRAM PRO",
    description: "Designed for consistent users who want premium access.",
    coins: "8,000 Blitcoinz",
    price: "$39",
  },
  {
    title: "VR VANGUARD",
    description:
      "For enthusiasts who want to elevate their Blitsor experience.",
    coins: "15,000 Blitcoinz",
    price: "$79",
  },
  {
    title: "BLITCOINZ ELITE",
    description:
      "The ultimate package for dedicated users with the best value.",
    coins: "25,000 Blitcoinz",
    price: "$99",
  },
];

export default function PricingSection() {
  return (
    <SimplePage>
        <div className="text-center mb-5">
            <Text style={{fontSize:"3rem"}}>Choose a Package</Text>
            <Text style={{fontSize:"2rem"}}>All About Blitsor</Text>
        </div>
      <Grid mt={20} justify="center">
        {pricingPlans.map((plan) => (
          <Grid.Col
            key={plan.title}
            span={{ base: 12, sm: 6, md: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                borderRadius: rem(15),
                width: "280px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ECECEC",
                  padding: rem(12),
                  fontWeight: "bold",
                  fontSize: rem(16),
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {plan.title}
              </div>

              <div
                style={{
                  backgroundColor: "#FF6B6B",
                  padding: rem(20),
                  borderRadius: `0 0 ${rem(12)} ${rem(12)}`,
                }}
              >
                <Text
                  size="sm"
                  style={{ marginBottom: rem(10), fontWeight: 500 }}
                >
                  {plan.description}
                </Text>

                <Text
                  size="lg"
                  style={{
                    marginBottom: rem(10),
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {plan.coins}
                </Text>

                <div
                  style={{
                    backgroundColor: "#E61E1E",
                    padding: rem(12),
                    borderRadius: "50%",
                    display: "inline-block",
                    minWidth: rem(90),
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Text size="md">for</Text>
                  <Title order={2} style={{ margin: 0 }}>
                    {plan.price}
                  </Title>
                </div>
              </div>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </SimplePage>
  );
}
