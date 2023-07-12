import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontFamily: "Inter",
    borderRadius: "10px",
    backgroundColor: "#FFF",
    color: "#000",
    padding: "1em",
  },
});

const variants = {
  "light-input": baseStyle,
};

export const Input = defineMultiStyleConfig({ variants });
