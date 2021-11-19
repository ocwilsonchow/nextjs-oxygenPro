import React from "react";
import { getPosts, getTopics } from "../services";
import Header from "../components/Header";
import { Flex, Text, Center, Code, Button } from "@chakra-ui/react";
import Link from 'next/link'

export default function about({ topics }) {
  return (
    <>
      <Header topics={topics} />
      <Flex justifyContent="center" flexDir="column">
        <Center my={10} fontWeight="bold" fontSize="5xl">
          About Oxygen
        </Center>
        <Center>
          <Code fontSize="xl">Writing🙇🏻</Code>
        </Center>
      </Flex>
      <Flex w="100%" justifyContent="center">
        <Link href="/home" passHref={true}>
          <Button my={10}>Go back to home page</Button>
        </Link>
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
