import React from "react";
import { Text, Flex, Button, Center, Box } from "@chakra-ui/react";
import { getPosts, getTopics } from "../services";
import Header from "../components/Header";
import Link from "next/link";

export default function home({ topics }) {
  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <main>
        <Flex
          py={20}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="7xl" fontWeight="bold" align="center">
            Bring {""}
            <Text
              display="inline"
              align="center"
              fontSize="7xl"
              fontWeight="bold"
              bgClip="text"
              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
            >
              Life
            </Text>
          </Text>
          <Box>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              align="center"
              display="inline"
            >
              to Healthcare
            </Text>
          </Box>
          <Box>
            {" "}
            <Text
              fontSize="4xl"
              fontWeight="bold"
              align="center"
              bgClip="text"
              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
            >
              Welcome to the modern medicine information library for everyone
            </Text>
          </Box>
          <Box maxW="60%">
            <Text mt={5} fontSize="large" color="gray.400" align="center">
              Oxygen Pro is a modern platform for anyone on earth to access high
              quality, evidence-based medical information. Whether you are a
              healthcare professional or not, we've got you covered.
            </Text>
          </Box>
        </Flex>
        <Center>
          <Link href="/" passHref={true}>
            <Button size="lg" colorScheme="yellow">
              Get Started
            </Button>
          </Link>
        </Center>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const topics = (await getTopics()) || [];

  return {
    props: { topics },
  };
}
