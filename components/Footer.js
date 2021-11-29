import React from "react";
import {
  Flex,
  Center,
  useColorModeValue,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";

function Footer() {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const pages = [
    {
      name: "Overview",
      url: "/home",
    },
    {
      name: "Pricing",
      url: "/home",
    },
    {
      name: "Our Vision",
      url: "/home",
    },
    {
      name: "Newsletter",
      url: "/home",
    },
    {
      name: "Join Our Team",
      url: "/home",
    },
  ];

  return (
    <Flex p={10} bg={bgColor} justifyContent="center" w="100%">
      <Flex maxW="1000px" flexDir="column">
        <Flex flexWrap="wrap" mb={5}>
          {pages.map((page, index) => {
            return (
              <Button key={index} bg="none" borderRadius="1.5rem" size="sm">
                {page.name}
              </Button>
            );
          })}
        </Flex>
        <Divider />
        <Flex my={5} flexWrap="wrap">
          <Text fontSize="xs" fontWeight="light" color="gray.400" px={2}>
            © 2021 Oxygen Pro. All rights reserved.
          </Text>
          
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
