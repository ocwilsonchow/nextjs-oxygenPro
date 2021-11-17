import React from "react";
import Link from "next/link";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

function dynamic() {
  return (
    <>
      <Flex justifyContent="center" alignItems='center' flexDir="column" p={10}>
        <h1>dynamic slug page</h1>
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
