import React from "react";
import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { getPosts, getTopics } from "../services";
import Header from "../components/Header";
import Link from "next/link";
import HomeSectionOne from "../components/HomeSectionOne";

export default function home({ topics }) {
  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <Center flexDir="column" py={10}>
        <Flex
          py={20}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            display="inline"
            align="center"
            fontSize="7xl"
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
          >
            Bring Life to Healthcare{""}
          </Text>

          <Box>
            <Text fontSize="4xl" fontWeight="bold" align="center" px={5}>
              Welcome to the modern medicine information library for everyone
            </Text>
          </Box>
          <Box px={5}>
            <Text mt={5} fontSize="large" align="center" fontWeight="medium" opacity="0.6">
              Oxygen Pro is a modern platform for anyone on earth to access high
              quality, evidence-based medical information.
            </Text>
            <Text
              fontSize="large"
              colorScheme="gray"
              align="center"
              fontWeight="medium"
              opacity="0.6"
            >
              Whether you are a healthcare professional or not, we have got you
              covered.
            </Text>
          </Box>
        </Flex>
        <Center>
          <Link href="/" passHref={true}>
            <Button
              size="lg"
              bg="yellow.400"
              fontWeight="bold"
              color="black"
              colorScheme="facebook"
              mr={5}
              boxShadow="lg"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/home" passHref={true}>
            <Button
              size="lg"
              fontWeight="bold"
              colorScheme="twitter"
              boxShadow="lg"
            >
              Know More
            </Button>
          </Link>
        </Center>
      </Center>
      <Divider my={30} />
      <HomeSectionOne />
    </div>
  );
}

export async function getStaticProps() {
  const topics = (await getTopics()) || [];

  return {
    props: { topics },
  };
}
