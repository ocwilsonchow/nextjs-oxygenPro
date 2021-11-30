import React, {useState, useRef, useEffect} from "react";
import Header from "../components/Header";
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
import { getPosts, getTopics } from "../services";

export default function SignIn({ topics }) {
  const cardColor = useColorModeValue("white", "gray.700");

  return (
    <>
      <Header topics={topics} />
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <Text fontWeight="bold" fontSize="4xl" align="center">
          Create your account
        </Text>
        <Center  align="center" m={5}>Development in progress 🔧</Center>
        <Flex
          p={10}
          bg={cardColor}
          w={["100%","80%","400px","400px"]}
          borderRadius="1rem"
          flexDir="column"
          boxShadow="xl"
        >
          <FormControl id="email" mb={5}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mb={5}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="confirm-password" mb={5}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button mb={5}>Create account</Button>
          <Divider />
          <Box mt={5}>Already have an account? Log in to Oxygen</Box>
        </Flex>
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const topics = (await getTopics()) || [];

  return {
    props: { posts, topics },
  };
}
