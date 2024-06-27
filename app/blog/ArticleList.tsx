"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  GridItem,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: string;
  name: string;
  image: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>

      <Text>{props.date}</Text>
    </HStack>
  );
};

export const ArticleList = () => {
  const [articleData, setArticleData] = useState<any>();
  const [authorData, setAuthorData] = useState<any>();

  const getArticleData = async () => {
    const { data: articleData, error: artilceError } = await supabase
      .from("blog")
      .select();
    if (artilceError) {
      console.log(artilceError);
    } else {
      setArticleData(articleData);
      console.log("articledata", articleData);
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <Box marginTop="20" className="mainContainer">
      <Heading variant="primary-heading" mt={20}>
        Stories by EasyWrite.Dev
      </Heading>
      <Heading variant="secondary-heading" marginTop="10" marginBottom="10">
        Latest articles
      </Heading>
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        spacing="40px"
      >
        {!articleData &&
          [0, 1, 2].map((item: any) => {
            return (
              <GridItem colSpan={{ base: 6, lg: 2 }} key={item}>
                <Wrap spacing="30px" marginBottom="10">
                  <WrapItem
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  >
                    <Box w="100%" height="100%">
                      <Box borderRadius="lg" overflow="hidden">
                        <Box
                          textDecoration="none"
                          _hover={{ textDecoration: "none" }}
                        >
                          <Skeleton colorScheme="purple">
                            <div
                              style={{ borderRadius: "10px", height: "400px" }}
                            />
                          </Skeleton>
                        </Box>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </GridItem>
            );
          })}
        {articleData &&
          articleData.map((item: any, index: any) => {
            return (
              <GridItem colSpan={{ base: 6, lg: 2 }} key={index}>
                <Wrap spacing="30px" marginBottom="10">
                  <WrapItem
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  >
                    <Box w="100%" height="100%">
                      <Box borderRadius="lg" overflow="hidden">
                        <Box
                          textDecoration="none"
                          _hover={{ textDecoration: "none" }}
                        >
                          <Link href={`/blog/${item.slug}`}>
                            <Image
                              transform="scale(1.0)"
                              src={item.image}
                              alt="some text"
                              objectFit="contain"
                              width="100%"
                              transition="0.3s ease-in-out"
                              _hover={{
                                transform: "scale(1.05)",
                              }}
                            />
                          </Link>
                        </Box>
                      </Box>
                      <BlogTags tags={item.tag} marginTop={3} />
                      <Heading fontSize="xl" marginTop="2">
                        <Link href={`/blog/${item.slug}`}>
                          <Text
                            textDecoration="none"
                            _hover={{ textDecoration: "none" }}
                          >
                            {item.title}
                          </Text>
                        </Link>
                      </Heading>
                      <Text as="p" fontSize="md" marginTop="2">
                        {item.description}
                      </Text>
                      <BlogAuthor
                        name={`${item.first_name} ${item.last_name}`}
                        date={item.date}
                        image={item.author_image}
                      />
                    </Box>
                  </WrapItem>
                </Wrap>
              </GridItem>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};
