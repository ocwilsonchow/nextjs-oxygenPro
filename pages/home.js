import React from "react";
import { Text, Flex, Button, Center } from "@chakra-ui/react";
import { getPosts, getTopics } from "../services";
import Header from "../components/Header";
import Link from 'next/link'

export default function home({ topics }) {
  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <main>
        <Flex
          p={20}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="7xl" fontWeight="bold" align="center">
            Welcome to the Modern Medicine Library For Everyone
          </Text>
        </Flex>
        <Center>
          <Link href="/"><Button>Get Started</Button></Link>
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
