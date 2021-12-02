import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";

function SignOut() {
  const cardColor = useColorModeValue("white", "gray.700");
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" p={5}>
      <Flex
        p={10}
        bg={cardColor}
        w={["100%", "80%", "400px", "450px"]}
        borderRadius="1rem"
        flexDir="column"
        boxShadow=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
      >
        <Text fontWeight="bold" fontSize="4xl" align="center" mb={8}>
          Sign Out
        </Text>
        <Text fontWeight="bold" fontSize="xl" mb={3}>
          Your registered email: 
        </Text>

        <Button my={5}>Sign out</Button>
        <Divider />
      </Flex>
    </Flex>
  );
}

export default SignOut;
