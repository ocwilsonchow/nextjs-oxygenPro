import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, GridItem, useColorModeValue, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DrugCard from "../components/DrugCard";
import Gadget from "../components/Gadget";
import { getPosts, getTopics } from "../services";

export default function Home({ posts }) {
  const gridBackground = useColorModeValue("gray.100", "gray.900");
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };

    window.addEventListener("resize", handleResize);
    console.log(width)
    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [width] )

  return (
    <div className={styles.container}>
      <Head>
        <title>Oxygen Pro</title>
        <meta
          name="description"
          content="A Modern Medicine Knowledge Library for Everyone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Header />
      </nav>

      <main>
        <Grid
          height="90vh"
          templateRows="repeat(4, auto)"
          templateColumns="repeat(20, 1fr)"
          className="grid"
          gap={4}
          overflow="hidden"
          p={5}
        >
          {/* Sidebar */}
          <GridItem
          display={width>=1500? "normal" : "none"}
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
            <Sidebar />
          </GridItem>

          {/* Main */}
          <GridItem
            colSpan={width>=1500? "13" : "20"}
            rowSpan={4}
            bg={gridBackground}
            borderRadius="20px"
            overflow="auto"
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
            
            <DrugCard posts={posts} />
          </GridItem>

          {/* Gadget */}
          <GridItem
          minW="300px"
            colSpan={4}
            rowSpan={4}
            display={width>=1500? "normal" : "none"}
            bg={gridBackground}
            borderRadius="20px"
          >
            <Gadget />
          </GridItem>
        </Grid>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const topics = (await getTopics()) || [];

  return {
    props: { posts, topics },
  };
}
