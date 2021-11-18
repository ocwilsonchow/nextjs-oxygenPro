import React from 'react'
import { getPosts, getTopics } from "../services";
import Header from '../components/Header'
import {Flex, Text, Center} from "@chakra-ui/react"

export default function about({topics}) {
    return (
        <>
            <Header topics={topics} />
            <Flex justifyContent="center">
                <Center my={10} fontWeight="bold" fontSize="5xl">
                    About Oxygen
                </Center>
            </Flex>
        </>
    )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    const topics = (await getTopics()) || [];
  
    return {
      props: { posts, topics },
    };
  }