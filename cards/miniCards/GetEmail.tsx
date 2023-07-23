import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { join } from "@/services/api";

export const GetEmail = ({}) => {
  const [email, setEmail] = useState<string>("");

  const handleGetEmail = () => {
    join(email);
  };

  return (
    // <Box>
    <InputGroup variant="email-pill">
      <Input
        placeholder="Join Waitlist"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputRightElement>
        <IconContext.Provider value={{ color: "#8B54BD", size: "2em" }}>
          <button onClick={handleGetEmail}>
            <BsFillArrowRightCircleFill />
          </button>
        </IconContext.Provider>
      </InputRightElement>
    </InputGroup>
    // </Box>
  );
};
