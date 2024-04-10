import React from "react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
  Stack,
  Box,
  Heading,
  Image,
  HStack,
  Text,
  Tag,
} from "@chakra-ui/react";
import MarkdownTheme from "@/theme/MarkdownTheme";
import Markdown from "react-markdown";

interface BlogAuthorProps {
  date: string;
  name: string;
  image: string;
}

interface Props {
  marginTop?: number;
  tags: any[];
}

export const DisplayArticle = ({ articleData }: any) => {
  console.log(articleData.markdown);
  return (
    <Stack className="mainContainer" spacing={10}>
      {/* @ts-ignore */}
      <Image
        transform="scale(1.0)"
        src={articleData.image}
        alt="some text"
        objectFit="contain"
        width="100%"
        mt={20}
      />
      <Stack>
        <Heading variant="primary-variant">{articleData.title}</Heading>
        <BlogTags tags={articleData.tag} marginTop={3} />
        <BlogAuthor
          name={`${articleData.first_name} ${articleData.last_name}`}
          image={articleData.author_image}
          date={articleData.date}
        />
      </Stack>
      <Box>
        <Markdown components={ChakraUIRenderer(MarkdownTheme)} skipHtml>
          {articleData.markdown}
        </Markdown>
      </Box>
    </Stack>
  );
};

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={`Avatar of ${props.name}`}
      />
      <Text variant="secondary-text">{props.name}</Text>
      <Text>—</Text>

      <Text variant="secondary-text">{props.date}</Text>
    </HStack>
  );
};

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
