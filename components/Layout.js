import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getPosts, getTopics } from "../services";
import {
  Grid,
  GridItem,
  useColorModeValue,
  Text,
  useMediaQuery,
  Divider,
  Center,
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Layout = ({ topics, children }) => {
  const [isLargeScreen, isDisplayingInBrowser] = useMediaQuery([
    "(min-width: 1400px)",
    "(display-mode: browser)",
  ]);
  const gridBackground = useColorModeValue("gray.100", "gray.900");
  const [width, setWidth] = useState();

  useEffect(() => {
    if (isLargeScreen) {
      return setWidth(1500);
    } else {
      setWidth(300);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(topics);

  return (
    <>
      <Header topics={topics} />
      <main>
        <Grid
          height="90vh"
          templateRows="repeat(4, auto)"
          templateColumns="repeat(20, 1fr)"
          className="grid"
          gap={4}
          overflow="hidden"
        >
          {/* Sidebar */}
          <GridItem
            display={width >= 1400 ? "normal" : "none"}
            overflow="auto"
            colSpan={3}
            rowSpan={4}
            pl={5}
            borderRadius="20px"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "teal",
                borderRadius: "24px",
              },
            }}
          >
            <Sidebar width={width} topics={topics} />
          </GridItem>

          {/* Main */}
          <GridItem
            colSpan={width >= 1400 ? "17" : "20"}
            rowSpan={4}
            mx={2}
            bg={gridBackground}
            borderRadius="20px"
            overflow="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "teal",
                borderRadius: "24px",
              },
            }}
          >
            <Text pt={5} pb={2} px={5} fontWeight="bold" fontSize="md">
              Therapeutics
            </Text>
            {children}
            <Divider />
          </GridItem>
        </Grid>
      </main>
    </>
  );
};

export default Layout;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const topics = (await getTopics()) || [];

  return {
    props: { posts, topics },
  };
}
