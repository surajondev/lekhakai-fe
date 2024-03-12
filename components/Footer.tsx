import { Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import { JoinWaitlist } from "@/cards/JoinWaitlist";
import FooterLink from "@/cards/FooterLink";

export const Footer = () => {
  return (
    <Box className="mainContainer" backgroundColor="#161C28">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 7 }}
        direction={{ base: "column", md: "row" }}
        justify={["center"]}
      >
        {/* <Box width={{ base: "100%", md: "45%" }}>
          <Testimonial />
        </Box> */}
        {/* <Box width={{ base: "100%", md: "60%", lg: "50%" }}>
          <JoinWaitlist />
        </Box> */}
      </Stack>
      <FooterLink />
    </Box>
  );
};

export const Testimonial = () => {
  const [index, setIndex] = useState(0);
  let [profileBadgeArr, setProfileBadgeArr] = useState(
    testimonials.slice(0, 4)
  );

  const handleChangeReview = () => {
    let newIndex;
    if (index === testimonials.length - 1) {
      setIndex(0);
      newIndex = 0;
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      newIndex = index + 1;
    }
    let newProfileBadgeArr = [];
    for (let i = 0; i < 4; i++) {
      let currIndex = newIndex + i;
      if (currIndex > testimonials.length - 1) {
        currIndex = currIndex % testimonials.length;
      }
      newProfileBadgeArr.push(testimonials[currIndex]);
    }
    setProfileBadgeArr(newProfileBadgeArr);
  };

  return (
    <Stack spacing={{ base: 6, md: 8 }}>
      <Heading variant="primary-heading" color="#FFF">
        People are Saying About EasyWrite.Dev
      </Heading>
      <Text variant="primary-text" color="#A6A6A6">
        EasyWrite.Dev leverages the power of artificial intelligence to provide
        comprehensive support and guidance throughout the technical writing
        process
      </Text>
      <IconContext.Provider value={{ color: "#D9D9D9", size: "4em" }}>
        <FaQuoteLeft />
      </IconContext.Provider>
      {testimonials && (
        <Stack spacing={{ base: 6, md: 8 }}>
          <Text variant="primary-text" color="#A6A6A6" height={100}>
            {testimonials[index].review}
          </Text>
          <Text variant="primary-text" color="#A6A6A6">
            _ {testimonials[index].author}
          </Text>
        </Stack>
      )}
      <Flex gap={2}>
        {profileBadgeArr.map((item, index) => {
          return (
            <Box
              height={50}
              width={50}
              borderRadius="full"
              overflow="hidden"
              key={index}
            >
              <Image
                src={item.image}
                width={50}
                height={50}
                alt={item.author}
              />
            </Box>
          );
        })}
        <IconContext.Provider value={{ color: "#FFF", size: "50px" }}>
          <Box cursor="pointer" onClick={handleChangeReview}>
            <GoPlay />
          </Box>
        </IconContext.Provider>
      </Flex>
    </Stack>
  );
};

const testimonials = [
  {
    review:
      "EasyWrite.Dev has truly revolutionized the way I approach technical writing. With its intelligent suggestions, grammar checks, and formatting assistance, it has become an invaluable tool in my arsenal.",
    author: "Ashish Gupta",
    image: "https://wallpapercave.com/wp/wp7256426.jpg",
  },
  {
    review:
      "As a seasoned technical writer, I am always on the lookout for tools that can streamline and enhance my writing process. That's why I was thrilled to discover EasyWrite.Dev.",
    author: "Rishabh Singh",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/66/113/desktop-wallpaper-cool-anime-boy-1080x1080-anime-boy-blue-1080x1080-mafia-anime-guy.jpg",
  },
  {
    review:
      "EasyWrite.Dev has significantly improved my technical writing skills. Its contextual suggestions and vocabulary enrichment feature have helped me refine my language and streamline the writing process.",
    author: "Vaishnavi Vichare",
    image: "https://wallpapercave.com/wp/wp5102455.jpg",
  },
  {
    review:
      "EasyWrite.Dev has transformed the way I create technical documentation. Its simplified document structure and real-time collaboration capabilities have made writing and editing a breeze. ",
    author: "Survesh Chavan",
    image:
      "https://profiles.bugcrowdusercontent.com/avatars/ec1ca11e50277842737042b0d4003c6a/goku-ultra-instinct-1-normal-636.png",
  },
  {
    review:
      "EasyWrite.Dev has truly revolutionized the way I approach technical writing. With its intelligent suggestions, grammar checks, and formatting assistance, it has become an invaluable tool in my arsenal.",
    author: "Ashish Gupta",
    image: "https://wallpapercave.com/wp/wp7256426.jpg",
  },
  {
    review:
      "As a seasoned technical writer, I am always on the lookout for tools that can streamline and enhance my writing process. That's why I was thrilled to discover EasyWrite.Dev.",
    author: "Rishabh Singh",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/66/113/desktop-wallpaper-cool-anime-boy-1080x1080-anime-boy-blue-1080x1080-mafia-anime-guy.jpg",
  },
  {
    review:
      "EasyWrite.Dev has significantly improved my technical writing skills. Its contextual suggestions and vocabulary enrichment feature have helped me refine my language and streamline the writing process.",
    author: "Vaishnavi Vichare",
    image: "https://wallpapercave.com/wp/wp5102455.jpg",
  },
  {
    review:
      "EasyWrite.Dev has transformed the way I create technical documentation. Its simplified document structure and real-time collaboration capabilities have made writing and editing a breeze. ",
    author: "Survesh Chavan",
    image:
      "https://profiles.bugcrowdusercontent.com/avatars/ec1ca11e50277842737042b0d4003c6a/goku-ultra-instinct-1-normal-636.png",
  },
];
