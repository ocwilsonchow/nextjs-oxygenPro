import React, { useEffect, useState } from "react";
import {useRouter } from 'next/router'
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
  Badge,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { getPosts, getSpecificTopics, getTopics } from "../../services";
import Layout from "../../components/Layout";
import CommentsForm from "../../components/ CommentsForm";

function Dynamic(params) {
  const router = useRouter();

  if(router.isFallback){
    return <Loader />
  }


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
              <Flex alignItems="center">
                Forum{" "}
                <Badge mx={2} colorScheme="whatsapp">
                  New
                </Badge>
              </Flex>
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
                        Overview
                      </Text>
                      <Text  colorScheme="transparent">
                        {params.specificContent.briefSummary}
                      </Text>
                    </Flex>
                    {params.specificContent.counselling.length !== 0 && (
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
                          Counselling
                        </Text>
                        <List  colorScheme="transparent">
                          {params.specificContent.counselling.map(
                            (counselling, index) => {
                              return (
                                <ListItem mb={2} key={index}>
                                  {" "}
                                  <ListIcon
                                    as={ArrowForwardIcon}
                                    color="green.500"
                                  />
                                  {counselling.text}
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      </Flex>
                    )}
                  </Flex>
                  <Flex
                    flexDir="column"
                    w={["100%", "100%", "50%", "50%"]}
                    px={2}
                  >
                    {params.specificContent.counselling.symptoms !== 0 && (
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
                                <Text mr={2} my={1}>
                                  {" "}
                                  <ListIcon
                                    as={ArrowForwardIcon}
                                    color="green.500"
                                  />
                                  {sign}
                                </Text>
                              </ListItem>
                            );
                          })}
                          {params.specificContent.symptoms.map(
                            (symptom, index) => {
                              return (
                                <ListItem key={index}>
                                  <Text  mr={2} my={1}>
                                    <ListIcon
                                      as={ArrowForwardIcon}
                                      color="green.500"
                                    />
                                    {symptom}
                                  </Text>
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      </Flex>
                    )}

                    {params.specificContent.riskFactors.length !== 0 && (
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
                                  <Text
                                    
                                    colorScheme="transparent"
                                    mr={2}
                                    my={1}
                                  >
                                    {" "}
                                    <ListIcon
                                      as={ArrowForwardIcon}
                                      color="green.500"
                                    />
                                    {risk}
                                  </Text>
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      </Flex>
                    )}
                    {params.specificContent.complications.length !== 0 && (
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
                                  <Text mr={2} my={1}>
                                    {" "}
                                    <ListIcon
                                      as={ArrowForwardIcon}
                                      color="green.500"
                                    />
                                    {complication}
                                  </Text>
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      </Flex>
                    )}
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
                          <Text  mr={2} my={1}>
                            <ListIcon as={ArrowForwardIcon} color="green.500" />
                            {step}
                          </Text>
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Flex>
              {params.specificContent.secondLineTreatment.length !== 0 && (
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
                            <Text mr={2} my={1}>
                              {" "}
                              <ListIcon
                                as={ArrowForwardIcon}
                                color="green.500"
                              />
                              {step}
                            </Text>
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                </Flex>
              )}
              {params.specificContent.thirdLineTreatment.length !== 0 && (
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
                            <Text mr={2} my={1}>
                              {" "}
                              <ListIcon
                                as={ArrowForwardIcon}
                                color="green.500"
                              />
                              {step}
                            </Text>
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                </Flex>
              )}
              {params.specificContent.furtherLineTreatment.length !== 0 && (
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
                    FURTHER TREATMENT
                  </Text>
                  <List>
                    {params.specificContent.furtherLineTreatment.map(
                      (step, index) => {
                        return (
                          <ListItem key={index}>
                            <Text  mr={2} my={1}>
                              {" "}
                              <ListIcon
                                as={ArrowForwardIcon}
                                color="green.500"
                              />
                              {step}
                            </Text>
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                </Flex>
              )}
            </TabPanel>
            <TabPanel>
              <CommentsForm topic={params.specificContent.name} />
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
    fallback: true,
  };
};
