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
import HomeSectionTwo from "../components/HomeSectionTwo";

export default function home({ topics }) {
  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <Center flexDir="column" my={["2vh", "5vh", "10vh", "20vh"]}>
        <Flex
          pb={10}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            align="center"
            fontSize={["5xl", "6xl", "7xl", "8xl"]}
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-r, gray.400, yellow.400, pink.300)"
            flexWrap="wrap"
          >
            Bring Life to Healthcare{""}
          </Text>

          <Box>
            <Text
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight="bold"
              align="center"
              px={5}
            >
              Welcome to the modern medical library for everyone
            </Text>
          </Box>
          <Box px={5}>
            <Text
              mt={5}
              fontSize={["xs", "small", "md", "large"]}
              align="center"
              fontWeight="medium"
             
            >
              Oxygen Pro is a modern platform for anyone on earth to access high
              quality, evidence-based medical information.
            </Text>
            <Text
              fontSize={["xs", "small", "md", "large"]}
              colorScheme="gray"
              align="center"
              fontWeight="medium"
              
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
            >
              Get Started 💨
            </Button>
          </Link>
          <Link href="/home" passHref={true}>
            <Button size="lg" fontWeight="bold" colorScheme="twitter">
              Know More 👀
            </Button>
          </Link>
        </Center>
      </Center>
      <Center>
        <HomeSectionOne />
      </Center>
      <Center>
        <HomeSectionTwo />
      </Center>
    </div>
  );
}

export async function getStaticProps() {
  const topics = (await getTopics()) || [];

  return {
    props: { topics },
  };
}
