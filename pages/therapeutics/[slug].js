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
  ListIcon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { getPosts, getSpecificTopics, getTopics } from "../../services";
import Layout from "../../components/Layout";

function Dynamic(params) {
  console.log(params);
  const bgColor = useColorModeValue("gray.300", "gray.900");
  const cardColor = useColorModeValue("gray.200", "gray.800");

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
        <Tabs>
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
                  px={2}
                >
                  {params.specificContent.name}
                </Text>
                <Flex flexWrap="wrap" justifyContent="space-between">
                  <Flex
                    flexDir="column"
                    w={["100%", "100%", "50%", "50%"]}
                    px={2}
                  >
                    <Flex
                      borderLeft="0.5rem solid tomato"
                      p={4}
                      bg={cardColor}
                      flexDir="column"
                      my={2}
                      transition="all ease 0.5s"
                      _hover={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                      }}
                      borderRadius="0.5rem"
                    >
                      <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                        What is it?
                      </Text>
                      <Code colorScheme="transparent" >{params.specificContent.briefSummary}</Code>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir="column"
                    w={["100%", "100%", "50%", "50%"]}
                    px={2}
                  >
                    <Flex
                      borderLeft="0.5rem solid teal"
                      bg={cardColor}
                      p={4}
                      flexDir="column"
                      my={2}
                      borderRadius="0.5rem"
                      transition="all ease 0.5s"
                      _hover={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                      }}
                    >
                      <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                        Signs and Symptoms
                      </Text>
                      <List>
                      {params.specificContent.signs.map((sign, index) => {
                          return (
                            <ListItem key={index}>
                              <Code  colorScheme="transparent"  mr={2} my={1}>
                                {" "}
                                <ListIcon
                                  as={ArrowForwardIcon}
                                  color="green.500"
                                />
                                {sign}
                              </Code>
                            </ListItem>
                          );
                        })}
                        {params.specificContent.symptoms.map(
                          (symptom, index) => {
                            return (
                              <ListItem key={index}>
                                <Code   colorScheme="transparent" mr={2} my={1}>
                                  <ListIcon
                                    as={ArrowForwardIcon}
                                    color="green.500"
                                  />
                                  {symptom}
                                </Code>
                              </ListItem>
                            );
                          }
                        )}
                        
                      </List>
                    </Flex>
                   
                    <Flex
                      borderLeft="0.5rem solid teal"
                      bg={cardColor}
                      p={4}
                      flexDir="column"
                      my={2}
                      borderRadius="0.5rem"
                      transition="all ease 0.5s"
                      _hover={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                      }}
                    >
                      <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                        Risk Factors
                      </Text>
                      <List>
                        {params.specificContent.riskFactors.map(
                          (risk, index) => {
                            return (
                              <ListItem key={index}>
                                <Code colorScheme="transparent"  mr={2} my={1}>
                                  {" "}
                                  <ListIcon
                                    as={ArrowForwardIcon}
                                    color="green.500"
                                  />
                                  {risk}
                                </Code>
                              </ListItem>
                            );
                          }
                        )}
                      </List>
                    </Flex>
                    <Flex
                      borderLeft="0.5rem solid teal"
                      bg={cardColor}
                      p={4}
                      borderRadius="0.5rem"
                      flexDir="column"
                      my={2}
                      transition="all ease 0.5s"
                      _hover={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                      }}
                    >
                      <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                        Complications
                      </Text>
                      <List>
                        {params.specificContent.complications.map(
                          (complication, index) => {
                            return (
                              <ListItem key={index}>
                                <Code colorScheme="transparent"  mr={2} my={1}>
                                  {" "}
                                  <ListIcon
                                    as={ArrowForwardIcon}
                                    color="green.500"
                                  />
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
              <Flex
                borderLeft="0.5rem solid pink"
                bg={cardColor}
                p={4}
                borderRadius="0.5rem"
                flexDir="column"
                my={2}
                transition="all ease 0.5s"
                _hover={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                }}
              >
                <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                  FIRST LINE
                </Text>
                <List>
                  {params.specificContent.firstLineTreatment.map(
                    (step, index) => {
                      return (
                        <ListItem key={index}>
                          <Code colorScheme="transparent" mr={2} my={1}>
                            {" "}
                            <ListIcon as={ArrowForwardIcon} color="green.500" />
                            {step}
                          </Code>
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Flex>
              <Flex
                borderLeft="0.5rem solid pink"
                bg={cardColor}
                p={4}
                borderRadius="0.5rem"
                flexDir="column"
                my={2}
                transition="all ease 0.5s"
                _hover={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                }}
              >
                <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                  SECOND LINE
                </Text>
                <List>
                  {params.specificContent.secondLineTreatment.map(
                    (step, index) => {
                      return (
                        <ListItem key={index}>
                          <Code colorScheme="none" mr={2} my={1}>
                            {" "}
                            <ListIcon as={ArrowForwardIcon} color="green.500" />
                            {step}
                          </Code>
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Flex>
              <Flex
                borderLeft="0.5rem solid pink"
                bg={cardColor}
                p={4}
                borderRadius="0.5rem"
                flexDir="column"
                my={2}
                transition="all ease 0.5s"
                _hover={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                }}
              >
                <Text fontWeight="extrabold" fontSize="xl" mb={2}>
                  THIRD LINE
                </Text>
                <List>
                  {params.specificContent.thirdLineTreatment.map(
                    (step, index) => {
                      return (
                        <ListItem key={index}>
                          <Code colorScheme="transparent" mr={2} my={1}>
                            {" "}
                            <ListIcon as={ArrowForwardIcon} color="green.500" />
                            {step}
                          </Code>
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Flex>
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
