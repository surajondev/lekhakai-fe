"use client";

import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { ArticleList } from "./ArticleList";

export default function Page() {
  return (
    <Box overflow="hidden">
      <Box
        width={634}
        height={634}
        flexShrink={0}
        borderRadius={634}
        backgroundColor="#8A52C2"
        position="absolute"
        filter={"blur(400px)"}
        ml={-300}
        mt={-300}
        zIndex={-1}
      />
      <Box
        width={634}
        height={634}
        flexShrink={0}
        borderRadius={634}
        backgroundColor="#FFD6D6"
        position="absolute"
        filter={"blur(250px)"}
        ml={"40%"}
        mt={-300}
        zIndex={-1}
      />
      <Box
        width={634}
        height={634}
        flexShrink={0}
        borderRadius={634}
        backgroundColor="#8B54BE"
        position="absolute"
        filter={"blur(400px)"}
        ml={"70%"}
        zIndex={-1}
      />
      <Box
        width={634}
        height={634}
        flexShrink={0}
        borderRadius={634}
        backgroundColor="#FFF"
        position="absolute"
        filter={"blur(400px)"}
        ml={"30%"}
        zIndex={-1}
      />
      <ArticleList />
      <Box position="relative">
        <Box
          width={634}
          height={634}
          flexShrink={0}
          borderRadius={634}
          backgroundColor="#FFD6D6"
          position="absolute"
          filter={"blur(250px)"}
          top="20%"
          left="-20%"
          zIndex={-1}
        />
        <Box
          width={634}
          height={634}
          flexShrink={0}
          borderRadius={634}
          backgroundColor="#8B54BE"
          position="absolute"
          filter={"blur(400px)"}
          top="50%"
          left="70%"
          zIndex={-1}
        />
      </Box>
      <Box backgroundColor="#161C28">
        <Footer />
      </Box>
    </Box>
  );
}
