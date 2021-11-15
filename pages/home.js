import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  useColorModeValue,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { getTopics } from "../services";

export default function home({ topics }) {
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

  return (
    <div>
      <nav>
        <Header topics={topics} />
      </nav>
      <main>
        <Grid
          height="90vh"
          templateRows="repeat(4, auto)"
          templateColumns="repeat(20, 1fr)"
          className="grid"
          gap={4}
          overflow="hidden"
        >
          <GridItem
            display={width >= 1500 ? "normal" : "none"}
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
            <Sidebar topics={topics} />
          </GridItem>
          <GridItem colSpan={width >= 1500 ? "17" : "20"} rowSpan={4}></GridItem>
        </Grid>
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
