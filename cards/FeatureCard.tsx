import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import FeaturesTopic from "@/public/images/FeaturesTopic.png";
import FeaturesAI from "@/public/images/FeaturesAI.png";
import FeaturesAnalytics from "@/public/images/FeaturesAnalytics.png";

interface FeaturesCardProps {
  index: number;
  title: string;
  desc: string;
}

const imageArr = [FeaturesTopic, FeaturesAI, FeaturesAnalytics];

function FeatureCard({ index, title, desc }: FeaturesCardProps) {
  return (
    <Flex
      w="full"
      direction="column"
      alignItems="left"
      justifyContent="center"
      gap="5"
    >
      <Image
        src={imageArr[index]}
        alt={`Picture of ${title}`}
        width={300}
        height={300}
      />
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
      </Flex>

      <Flex justifyContent="space-between" alignContent="center">
        <Text variant="secondary-text" color="#A6A6A6">
          {desc}
        </Text>
      </Flex>
    </Flex>
  );
}

export default FeatureCard;
