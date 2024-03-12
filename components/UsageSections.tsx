import { Stack, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { BiFileFind } from "react-icons/bi";
import { RiAiGenerate } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import HeroImg from "@/public/images/Hero.png";

export default function UsageSection() {
  return (
    <Box backgroundColor="#F9F8FE">
      <Box className="mainContainer">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 15 }}
          py={{ base: 10, md: 15 }}
          mt={20}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            flex={1}
            spacing={{ base: 5, md: 10 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading variant="primary-heading">
              How We Help Technical Writers in Different Sections
            </Heading>
            <Text color="#A6A6A6" variant="secondary-text">
              We provide comprehensive assistance with topic research,
              scheduling article , and analytics to enhance your documentation
              process and maximize its impact.
            </Text>
          </Stack>
          <Stack
            align={"left"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            width={{ base: "90%", md: "50%" }}
          >
            {stepsData &&
              stepsData.map((item, index) => {
                return (
                  <Flex gap={5} alignItems="center" key={index}>
                    <Box
                      padding={2}
                      boxShadow="0px 4px 9px 0px rgba(0, 0, 0, 0.1);"
                    >
                      <IconContext.Provider
                        value={{ color: "#8B54BD", size: "2em" }}
                      >
                        {item.icon}
                      </IconContext.Provider>
                    </Box>
                    <Box>
                      <Heading variant="secondary-heading" fontSize={28}>
                        {item.title}
                      </Heading>
                      <Text variant="secondary-text" color="#A6A6A6">
                        {item.desc}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

const stepsData = [
  {
    title: "Topic Research",
    desc: "We will help you in finding article titles that more people look to read.",
    icon: <BiFileFind />,
  },
  {
    title: "Scheduling Article",
    desc: "Helping you writing, scheduling and publish article across mulitple platform from one place.",
    icon: <RiAiGenerate />,
  },
  {
    title: "Analytics",
    desc: "We can visualize your data in a way that is easy to understand and interpret.",
    icon: <TbBrandGoogleAnalytics />,
  },
];
