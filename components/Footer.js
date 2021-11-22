import React from "react";
import { Flex, Center, useColorModeValue, Button, Divider } from "@chakra-ui/react";

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
    <Flex p={10}  bg={bgColor} justifyContent="center">
      <Flex maxW="1000px">
          <Flex>
          {pages.map((page)=> {
              return (
                  <Button bg="none" borderRadius="1.5rem" size="sm">{page.name}</Button>
              )
          })}
          </Flex>
          
      </Flex>
     
    </Flex>
  );
}

export default Footer;
