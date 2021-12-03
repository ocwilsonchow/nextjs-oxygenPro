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

function SignIn() {
  const cardColor = useColorModeValue("white", "gray.700");
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" p={5}>
      <Flex
        p={10}
        bg={cardColor}
        w={["100%", "80%", "400px", "400px"]}
        borderRadius="1rem"
        flexDir="column"
        boxShadow=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
      >
        <Text fontWeight="bold" fontSize="4xl" align="center" mb={8}>
          Sign In
        </Text>
        <FormControl id="email" mb={5}>
        <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl id="password" mb={5}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password"/>
        </FormControl>
        <FormControl id="confirm-password" mb={5}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" placeholder="Password"/>
        </FormControl>
        <Button mb={5}>Sign In</Button>
        <Divider />
        <Box mt={5}>Have not got an account? Sign up now</Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
