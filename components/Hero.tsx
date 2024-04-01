import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Center,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { SiHashnode, SiMedium } from "react-icons/si";
import { BiLogoDevTo } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import HeroImg from "@/public/images/Hero.png";
import { MiniDisplayCard } from "@/cards/miniCards/MiniDisplayCard";
import ProfileImage from "@/public/images/Profile.png";
import { StackDirection } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { GetEmail } from "@/cards/miniCards/GetEmail";
import Link from "next/link";

type MiniDisplayCardData = Array<{
  top: number;
  left: number;
  title: String;
  subTitle: String | null;
  cardImage?: StaticImageData | null;
  icon: JSX.Element | null;
  flexD: StackDirection;
}>;

export default function Hero() {
  const appURL: string = process.env.APP_URL || "";

  return (
    <Box className="mainContainer">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading variant="hero-heading">
            Powered your technical writing with EasyWrite
          </Heading>
          <Text color={"gray.500"} variant="secondary-text">
            Gain in-depth analytics for your dev.to, and Hashnode blog and
            receive personalized topic ideas generated based on previous ranked
            article.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "center", md: "left" }}
            justify={{ base: "center", md: "left" }}
            width={{ base: "100%", md: "70%" }}
          >
            <Button variant="capsule-button" backgroundColor="#8B54BD">
              <Link href={`${appURL}/login`}>
                <Text className="primary-text">Try it now</Text>
              </Link>
            </Button>
            <Button variant="capsule-button">
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <AiOutlinePlayCircle />
              </IconContext.Provider>
              <Text className="primary-text" color="black" pl={2}>
                See how it works
              </Text>
            </Button>
            {/* <GetEmail /> */}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {miniDisplayCardData &&
            miniDisplayCardData.map((item, index) => (
              <Box
                position="absolute"
                top={`${item.top}%`}
                left={`${item.left}%`}
                key={index}
              >
                <MiniDisplayCard
                  title={item.title}
                  subTitle={item.subTitle}
                  cardImage={item.cardImage}
                  icon={item.icon}
                  flexD={item.flexD}
                />
              </Box>
            ))}
          <Box borderRadius="10px" overflow="hidden">
            <Image alt="Hero Image" src={HeroImg} width={300} height={300} />
          </Box>
        </Flex>
      </Stack>
      <Box>
        <Center textAlign="center">
          <Heading variant="bold-medium-heading">
            Platforms that are supported now
          </Heading>
        </Center>
        <Center>
          <SimpleGrid
            columns={[2, 2, 2]}
            spacing={{ base: 0, md: 20 }}
            rowGap={{ base: 10, md: 20 }}
            mt={10}
          >
            <Flex alignItems="center">
              <IconContext.Provider value={{ color: "#A6A6A6", size: "2em" }}>
                <BiLogoDevTo />
                <Heading variant="secondary-heading" color="#A6A6A6">
                  dev.to
                </Heading>
              </IconContext.Provider>
            </Flex>
            <Flex alignItems="center">
              <IconContext.Provider
                value={{
                  color: "#A6A6A6",
                  size: "2em",
                  className: "platformIcon",
                }}
              >
                <SiHashnode />
                <Heading variant="secondary-heading" color="#A6A6A6">
                  Hashnode
                </Heading>
              </IconContext.Provider>
            </Flex>
            {/* <Flex alignItems="center">
              <IconContext.Provider value={{ color: "#A6A6A6", size: "2em" }}>
                <SiMedium />
                <Heading variant="secondary-heading" color="#A6A6A6">
                  Medium
                </Heading>
              </IconContext.Provider>
            </Flex> */}
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
}

const miniDisplayCardData: MiniDisplayCardData = [
  {
    top: 10,
    left: 0,
    title: "Suraj Vishwakarma",
    subTitle: "Founder",
    cardImage: ProfileImage,
    icon: null,
    flexD: "row",
  },
  {
    top: 40,
    left: 60,
    title: "Views",
    subTitle: "30% Growth",
    cardImage: null,
    icon: <TbBrandGoogleAnalytics />,
    flexD: "row",
  },
  {
    top: 80,
    left: 0,
    title: "Topics Genearted Successfully",
    subTitle: null,
    cardImage: null,
    icon: <HiOutlineCheckCircle />,
    flexD: "row-reverse",
  },
];
