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
    console.log(topics)
  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <Center flexDir="column" my={["2vh", "5vh", "10vh", "15vh"]}>
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
            Revitalize Healthcare{""}
          </Text>

          <Box>
            <Text
              fontSize={["xl", "2xl", "3xl", "5xl"]}
              fontWeight="bold"
              align="center"
              px={5}
            >
              Welcome to the modern medical library for everyone
            </Text>
          </Box>
          <Center px={5} >
            <Text
              mt={5}
              fontSize={["xs", "small", "md", "xl"]}
              align="center"
              fontWeight="medium"
              w={["100%", "80%", "60%", "60%"]}
            >
              Oxygen Pro is a platform for anyone on earth to access high
              quality, evidence-based health and medical information. Our mission is to empower everyone to make better and informed self-care decisions, and to live a healthier life.
            </Text>
          </Center>
        </Flex>
        <Center>
          <Link href="/" passHref={true}>
            <Button
              size="lg"
              bg="yellow.400"
              fontWeight="bold"
              color="black"
              colorScheme="facebook"
            >
              Get Started 💨
            </Button>
          </Link>
          
          {/* <Link href="/home" passHref={true}>
            <Button size="lg" fontWeight="bold" colorScheme="twitter">
              Know More 👀
            </Button>
          </Link> */}
        </Center>
      </Center>
      <Flex p={3} mb={20} bg="black" justifyContent="center" alignItems="center" flexWrap="wrap">
          <Text mr={2} fontWeight="bold" color="white">
            Sponsor Oxygen development team!
          </Text>
          <Link href="/sponsor" passHref={true}>
            <Button size="sm" bg="gray.700">
              <Text
                bgClip="text"
                bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
              >
                Sponsor
              </Text>
            </Button>
          </Link>
        </Flex>
      <Center>
        <HomeSectionTwo />
      </Center>
      <Center>
        <HomeSectionOne />
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
