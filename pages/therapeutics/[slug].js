import Link from "next/link";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { getPosts, getTopics } from "../../services";

function dynamic(params) {

console.log(params)
  return (
    <>
      <Flex justifyContent="center" alignItems='center' flexDir="column" p={10}>
        <h1>Welcome to the {params.specificTopic} page!</h1>
        <Center my={10} p={5} bg="black" fontWeight="bold">
            Nice! The dynamic routing is working! 👊🏻
        </Center>
        <Link href="/">
          <Button my={10}>Go back to home page </Button>
        </Link>
      </Flex>
    </>
  );
}

export default dynamic;


export const getStaticPaths = async () => {
    const topics = (await getTopics()) || [];
    const paths = topics.therapeuticAreas.map(topic => {
        return{
            params: {slug: topic.slug},
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const posts = (await getPosts()) || [];
    const topics = (await getTopics()) || [];
    const specificTopic = context.params.slug
  
    return {
      props: { posts, topics, specificTopic },
    };
  }
  

