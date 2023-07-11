import { Stack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import HeroImg from "@/public/images/Hero.png";

export default function Benefits() {
  return (
    <Box className="mainContainer">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading variant="primary-heading">What Benifit Will You Get</Heading>
          <Stack spacing={{ base: 4, sm: 10 }} direction={{ base: "column" }}>
            {BenefitsData &&
              BenefitsData.map((item) => {
                return (
                  <Flex gap={2} alignItems="center">
                    <IconContext.Provider
                      value={{ color: "#8B54BD", size: "2em" }}
                    >
                      <FaCircleCheck />
                      <Text variant="primary-text">{item}</Text>
                    </IconContext.Provider>
                  </Flex>
                );
              })}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Image alt="Hero Image" src={HeroImg} width={300} height={300} />
        </Flex>
      </Stack>
    </Box>
  );
}

const BenefitsData = [
  "Find topics, research, edit, and publish articles faster",
  "Find relevant topics and research them thoroughly",
  "Iddentify popular topics, and successful articless",
  "Easy to use and integrate with your blogging workflow",
  "Affordable and offer a free trial or low-cost subscription",
];
