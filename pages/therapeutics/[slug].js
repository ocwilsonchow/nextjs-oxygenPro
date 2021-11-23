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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Code,
  List,
  ListItem,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getPosts, getSpecificTopics, getTopics } from "../../services";
import Layout from "../../components/Layout";

function Dynamic(params) {
  console.log(params);
  const bgColor = useColorModeValue("gray.300", "gray.900");

  return (
    <Layout topics={params.topics}>
      <Flex p={2} flexDir="column">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          fontWeight="bold"
          py={2}
          px={2}
          alignItems="center"
        >
          <BreadcrumbItem fontSize="xs">
            <BreadcrumbLink href="/therapeutics">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem fontSize="xs">
            <BreadcrumbLink>{params.specificContent.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem fontSize="xs">
            <BreadcrumbLink>{params.specificContent.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Divider my={1} />
        <Tabs mt={1}>
          <TabList>
            <Tab fontWeight="bold" fontSize="sm">
              Overview
            </Tab>
            <Tab fontWeight="bold" fontSize="sm">
              Treatment
            </Tab>
            <Tab fontWeight="bold" fontSize="sm">
              Professional
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex justifyContent="center" flexDir="column">
                <Text
                  fontWeight="bold"
                  mb={2}
                  fontSize={["2xl", "2xl", "3xl", "3xl"]}
                >
                  {params.specificContent.name}
                </Text>
                <Flex flexWrap="wrap"  justifyContent="space-between">
                  <Flex flexDir="column" >
                    <Flex p={2} flexDir="column" my={2}>
                      <Text fontWeight="extrabold">What is it?</Text>
                      <Text>{params.specificContent.briefSummary}</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDir="column" w="100%">
                    <Flex bg="gray.800" p={2} flexDir="column" my={2}>
                      <Text fontWeight="extrabold">Symptoms</Text>
                      <List>
                        {params.specificContent.symptoms.map((symptom) => {
                          return (
                            <ListItem>
                              <Code mr={2} my={1}>
                                {symptom}
                              </Code>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Flex>
                    <Flex bg="gray.800" p={2} flexDir="column" my={2}>
                      <Text fontWeight="extrabold">Signs</Text>
                      <List>
                        {params.specificContent.signs.map((sign) => {
                          return (
                            <ListItem>
                              <Code mr={2} my={1}>
                                {sign}
                              </Code>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Flex>
                    <Flex bg="gray.800" p={2} flexDir="column" my={2}>
                      <Text fontWeight="extrabold">Complications</Text>
                      <List>
                        {params.specificContent.complications.map(
                          (complication) => {
                            return (
                              <ListItem>
                                <Code mr={2} my={1}>
                                  {complication}
                                </Code>
                              </ListItem>
                            );
                          }
                        )}
                      </List>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>Development in progress</p>
            </TabPanel>
            <TabPanel>
              <p>Development in progress</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
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
