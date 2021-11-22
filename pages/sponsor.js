import React from "react";
import Header from "../components/Header";
import { Flex, Text } from "@chakra-ui/react";
import { getPosts, getTopics } from "../services";

export default function sponsor({ topics }) {
  return ( 
    <>
      <Header topics={topics} />
      <Flex justifyContent="center" bg="black" my={10} p={5}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          bgClip="text"
          bgGradient="linear(to-r, gray.400, yellow.400, pink.300)"
        >
          Your sponsorship is needed!
        </Text>
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
