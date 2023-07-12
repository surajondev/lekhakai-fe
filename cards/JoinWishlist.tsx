import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons/lib";
import { MdEmail } from "react-icons/md";

export const JoinWishlist = () => {
  return (
    <Stack
      spacing={{ base: 3, md: 6 }}
      direction="column"
      backgroundColor="#222938"
      borderRadius="10px"
      p="2em 4em"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <IconContext.Provider value={{ color: "#8B54BD", size: "5em" }}>
        <MdEmail />
      </IconContext.Provider>
      <Heading variant="primary-heading" color="#FFF">
        Join Wishlist
      </Heading>
      <FormControl>
        <FormLabel>
          <Text variant="primary-text" color="#FFF">
            Email address
          </Text>
        </FormLabel>
        <Input variant="light-input" type="email" />
      </FormControl>
      <Button variant="primary-button" width="100%">
        <Text variant="primary-text">Join Wishlist</Text>
      </Button>
    </Stack>
  );
};
