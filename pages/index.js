import { useEffect, useState } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DrugCard from "../components/DrugCard";
import Gadget from "../components/Gadget";
import { getPosts } from "../services"

export default function Home( { posts }) {
  const gridBackground = useColorModeValue("gray.100", "gray.900");
  const scrollColor = useColorModeValue("#fff", "#333");

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
          templateColumns="repeat(5, 1fr)"
          gap={4}
          overflow="hidden"
          p={5}
        >
          {/* Sidebar */}
          <GridItem
            rowSpan={4}
            colSpan={1}
            overflow="auto"
            pl={5}
            minWidth="350px"
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
            colSpan={3}
            rowSpan={4}
            bg={gridBackground}
            borderRadius="20px"
            minW="330px"
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
            colSpan={1}
            rowSpan={4}
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
  
  return {
    props: { posts }
    
  }
}