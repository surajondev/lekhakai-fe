import { Stack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import BenefitImg from "@/public/images/Benefit.png";
import { MiniDisplayCard } from "@/cards/miniCards/MiniDisplayCard";
import ProfileImage from "@/public/images/amarprofile.jpg";
import { BiLinkAlt } from "react-icons/bi";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { BsHash } from "react-icons/bs";
import { StackDirection } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

type MiniDisplayCardData = Array<{
  top: number;
  left: number;
  title: String;
  subTitle: String | null;
  cardImage?: StaticImageData | null;
  icon: JSX.Element | null;
  flexD: StackDirection;
}>;

export default function Benefits() {
  return (
    <Box className="mainContainer" id="benefits">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            variant="primary-heading"
            textAlign={{ base: "center", md: "left" }}
          >
            What Benifit Will You Get
          </Heading>
          <Stack spacing={{ base: 4, sm: 10 }} direction={{ base: "column" }}>
            {BenefitsData &&
              BenefitsData.map((item, index) => {
                return (
                  <Flex gap={2} alignItems="center" key={index}>
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
          position="relative"
          w={"full"}
          // border="solid 1px magenta"
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
            <Image alt="Hero Image" src={BenefitImg} width={300} height={300} />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}

const BenefitsData = [
  "Find topics, research, edit, and publish articles faster",
  "Find relevant topics and research them thoroughly",
  "Identify popular topics, and successful articless",
  "Easy to use and integrate with your blogging workflow",
  // "Affordable and offer a free trial or low-cost subscription",
];

const miniDisplayCardData: MiniDisplayCardData = [
  {
    top: 10,
    left: 0,
    title: "Amar Gupta",
    subTitle: "Technical Writer",
    cardImage: ProfileImage,
    icon: null,
    flexD: "row-reverse",
  },
  {
    top: 40,
    left: 60,
    title: "Popular Tags",
    subTitle: "#javascript, #react",
    cardImage: null,
    icon: <BsHash />,
    flexD: "row",
  },
  {
    top: 80,
    left: 0,
    title: "Integrated with dev.to",
    subTitle: null,
    cardImage: null,
    icon: <BiLinkAlt />,
    flexD: "row-reverse",
  },
];
