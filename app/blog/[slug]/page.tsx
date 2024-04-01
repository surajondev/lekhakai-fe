"use client";

import React, { useState, useEffect } from "react";
import { Stack, Heading, Box } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { error } from "console";
import { DisplayArticle } from "./DisplayArticle";

const articlePage = () => {
  const [articleData, setArticleData] = useState<any>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleFetchParam = async () => {
    const slugArr = pathname.split("/");
    const slug = slugArr[slugArr.length - 1];
    console.log(slug);

    const { data: articleData, error: artilceError } = await supabase
      .from("blog")
      .select()
      .eq("slug", slug);

    if (artilceError) {
      console.log(artilceError);
    } else {
      setArticleData(articleData[0]);
      console.log(articleData[0]);
    }
  };

  useEffect(() => {
    handleFetchParam();
  }, []);

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
      {articleData != null && <DisplayArticle articleData={articleData} />}
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
};

export default articlePage;
