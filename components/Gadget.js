import React from "react";
import {
  Flex,
  Divider,
  Box,
  Text,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

function Gadget() {
  return (
    <Flex flexDir="column" justifyContent="flex-start" p={2}>
      <Flex mb={5} fontWeight="bold" fontSize="3xl">
        Treatment Guideline
      </Flex>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Development still in progress!</AlertTitle>
        <AlertDescription mr={2}>
          Stay tuned for update from Wilson
        </AlertDescription>
      </Alert>
    </Flex>
  );
}

export default Gadget;
