import { Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const GetEmail = ({}) => {
  return (
    // <Box>
    <InputGroup variant="email-pill">
      <Input placeholder="Join Waitlist" />
      <InputRightElement>
        <IconContext.Provider value={{ color: "#8B54BD", size: "2em" }}>
          <button>
            <BsFillArrowRightCircleFill />
          </button>
        </IconContext.Provider>
      </InputRightElement>
    </InputGroup>
    // </Box>
  );
};
