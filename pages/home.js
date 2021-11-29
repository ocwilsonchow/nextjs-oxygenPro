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
import HomeSectionZero from "../components/HomeSectionZero";
import Footer from "../components/Footer";

export default function Home({ topics }) {
  const textColor = useColorModeValue("black", "white");

  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <Center flexDir="column" my={["2vh", "5vh", "10vh", "10vh"]}>
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
            px={10}
            bgGradient="linear(to-r, gray.400, yellow.400, pink.300)"
            flexWrap="wrap"
          >
            Oxygen Health
          </Text>

          <Box>
            <Text
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
              fontWeight="bold"
              align="center"
              px={5}
            >
              The modern medical library for everyone
            </Text>
          </Box>
          <Center px={5}>
            <Text
              mt={5}
              fontSize={["xs", "small", "md", "xl"]}
              align="center"
              w={["100%", "80%", "60%", "60%"]}
            >
              Oxygen Pro is a platform for anyone on earth to access high
              quality, evidence-based health and medical information. Our
              mission is to empower everyone to make better and informed
              self-care decisions, and to live a healthier life.
            </Text>
          </Center>
        </Flex>
        <Center py={5}>
          <Link href="/about" passHref={true}>
            <Button
              px={5}
              borderRadius="1rem"
              color={textColor}
              variant="outline"
            >
              Learn more about our team and vision 💬
            </Button>
          </Link>
        </Center>
        <Center py={5}>
          <Link href="/" passHref={true}>
            <Button
              size="lg"
              bg="yellow.400"
              fontWeight="bold"
              color="black"
              colorScheme="facebook"
              borderRadius="1.5rem"
            >
              Get Started 💨
            </Button>
          </Link>
        </Center>
      </Center>
      <Center>
        <HomeSectionZero />
      </Center>

      <Center>
        <HomeSectionTwo />
      </Center>
      <Center>
        <HomeSectionOne />
      </Center>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const topics = (await getTopics()) || [];

  return {
    props: { topics },
  };
}
