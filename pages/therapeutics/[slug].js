import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Center,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getPosts, getSpecificTopics, getTopics } from "../../services";
import Layout from "../../components/Layout";

function Dynamic(params) {
  console.log(params);
  const bgColor = useColorModeValue("gray.300", "gray.900");

  return (
    <Layout topics={params.topics}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        fontWeight="bold"
        py={4}
        px={5}
        alignItems="center"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{params.specificContent.category}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{params.specificContent.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider />
      <Flex
        justifyContent="Flex-start"
        flexDir="column"
        p={["5", "5", "5", "7"]}
      >
        <Text  fontWeight="bold" fontSize={["2xl", "2xl", "3xl", "4xl"]}>
          {params.specificContent.name}
        </Text>
        <Center my={10} p={5} bg="black" fontWeight="bold" color="white">
          Nice! The dynamic route is working! We are working hard on building
          this page, stay tuned. 👀
        </Center>
      </Flex>
    </Layout>
  );
}

export default Dynamic;

export async function getStaticProps({ params }) {
  const posts = (await getPosts()) || [];
  const topics = (await getTopics()) || [];
  const specificTopicSlug = params.slug;
  const specificContent = (await getSpecificTopics(params.slug)) || [];

  return {
    props: { posts, topics, specificTopicSlug, specificContent },
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
