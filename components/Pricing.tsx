import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { PricingCard } from "@/cards/PricingCard";

export const Pricing = () => {
  return (
    <Box className="mainContainer">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 30 }}
        pt={{ base: 20, md: 20 }}
        direction={{ base: "column" }}
      >
        <Heading variant="primary-heading">Choose Plan</Heading>
        <Heading variant="primary-heading">That’s Right For You</Heading>
        <Text variant="primary-text" color="#A6A6A6">
          Choose plan that works best for you, feel free to contact us
        </Text>
        <Tabs variant="switch-tabs">
          <Center>
            <TabList>
              <Tab>
                <Text variant="primary-text">Bil Monthly</Text>
              </Tab>
              <Tab>
                <Text variant="primary-text">Bil Yearly</Text>
              </Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
              >
                {MonthlyPricingData &&
                  MonthlyPricingData.map((item, index) => {
                    return (
                      <PricingCard
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        features={item.features}
                        buttonText={item.buttonText}
                        selected={item.selected}
                      />
                    );
                  })}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
              >
                {YearlyPricingData &&
                  YearlyPricingData.map((item, index) => {
                    return (
                      <PricingCard
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        features={item.features}
                        buttonText={item.buttonText}
                        selected={item.selected}
                      />
                    );
                  })}
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

const MonthlyPricingData = [
  {
    title: "Free",
    desc: "Suited for taking a look at the tool and its working. Limited by features.",
    price: 0,
    features: [
      "2 Searches Daily",
      "10 topic ideasy",
      "No Topics Coverage",
      "No SEO guidance",
    ],
    buttonText: "Signup for free",
    selected: false,
  },
  {
    title: "Pro",
    desc: "Suited for individual content creator. It will cover most of the features.",
    price: 9,
    features: [
      "Unlimited Searches",
      "All topics idea for display",
      "Topics Coverage",
      "Basic SEO",
    ],
    buttonText: "Go to pro",
    selected: true,
  },
  {
    title: "Business",
    desc: "Suited for business that are looking forward to doing content reasearch and SEO.",
    price: 19,
    features: [
      "Unlimited Searches",
      "All topics idea for display",
      "Advanced SEO",
      "Topic Coverage",
    ],
    buttonText: "Go to business",
    selected: false,
  },
];
const YearlyPricingData = [
  {
    title: "Free",
    desc: "Suited for taking a look at the tool and its working. Limited by features.",
    price: 0,
    features: [
      "2 Searches Daily",
      "10 topic ideasy",
      "No Topics Coverage",
      "No SEO guidance",
    ],
    buttonText: "Signup for free",
    selected: false,
  },
  {
    title: "Pro",
    desc: "Suited for individual content creator. It will cover most of the features.",
    price: 84,
    features: [
      "Unlimited Searches",
      "All topics idea for display",
      "Topics Coverage",
      "Basic SEO",
    ],
    buttonText: "Go to pro",
    selected: true,
  },
  {
    title: "Business",
    desc: "Suited for business that are looking forward to doing content reasearch and SEO.",
    price: 180,
    features: [
      "Unlimited Searches",
      "All topics idea for display",
      "Topic Coverage",
      "Advanced SEO",
    ],
    buttonText: "Go to business",
    selected: false,
  },
];
