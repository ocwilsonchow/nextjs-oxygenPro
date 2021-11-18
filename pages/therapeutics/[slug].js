import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Center, Flex, Text} from "@chakra-ui/react";
import { getPosts, getSpecificTopics, getTopics } from "../../services";
import Layout from "../../components/Layout";

function dynamic(params, topics) {
  console.log(params);
  return (
    <Layout topics={params.topics}>
      <Flex justifyContent="center" alignItems="center" flexDir="column" p={10} h="90%">
        <Text fontWeight="bold" fontSize="xl">Welcome to the {params.specificTopic} page!</Text>
        <Center my={10} p={5} bg="black" fontWeight="bold" color="white">
          Nice! The dynamic routing is working! We are working hard on building
          this page, stay tuned. 👀
        </Center>
        <Link href="/" passHref={true}>
          <Button my={10}>Go back to home page </Button>
        </Link>
      </Flex>
    </Layout>
  );
}

export default dynamic;

export async function getStaticProps(context) {
  const posts = (await getPosts()) || [];
  const topics = (await getTopics()) || [];
  const specificTopic = context.params.slug;
  const specificTopicContent = (await getSpecificTopics()) || [];

  return {
    props: { posts, topics, specificTopic, specificTopicContent },
  };
}

export const getStaticPaths = async () => {
  const topics = (await getTopics()) || [];
  const paths = topics.therapeuticAreas.map((topic) => {
    return {
      params: { slug: topic.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
