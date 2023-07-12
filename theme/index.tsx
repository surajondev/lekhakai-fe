import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Box } from "./Box";
import { Tabs } from "./Tabs";
import { Input } from "./Input";

const theme = extendTheme({
  components: {
    Button: Button,
    Text: Text,
    Heading: Heading,
    Box: Box,
    Tabs: Tabs,
    Input: Input,
  },
});

export default theme;
