import React from "react";
import { getPosts, getTopics } from "../services";
import Header from "../components/Header";
import {
  Flex,
  Text,
  Center,
  Code,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Link from "next/link";

export default function about({ topics }) {
  return (
    <>
      <Header topics={topics} />
      <Flex justifyContent="center">
        <Flex
          justifyContent="center"
          flexDir="column"
          maxW="1000px"
        >
          <Text my={5} mx={2} fontWeight="bold" fontSize={["3xl","3xl","3xl","5xl"]} align="center">
            About Us
          </Text>
          <Text  mx={2} mb={10} fontSize={["xl","xl","xl","2xl"]} align="center">
            We value extraordinary healthcare experience that is available to everyone.
          </Text>
          <Tabs mt={1}>
            <TabList>
              <Tab fontWeight="bold">Our Vision</Tab>
              <Tab fontWeight="bold">Team</Tab>
              <Tab fontWeight="bold">Timeline</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex justifyContent="Flex-start" flexDir="column">
                  <Text
                    fontWeight="bold"
                    fontSize={["2xl", "2xl", "3xl", "4xl"]}
                  >
                    Tab
                  </Text>
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
