import React from "react";
import {
  Flex,
  Center,
  useColorModeValue,
  IconButton,
  Button,
  Divider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  HamburgerIcon,
  EditIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
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
          <Text fontSize="xs" fontWeight="light" px={2}>
            © 2021 Oxygen Pro. All rights reserved.
          </Text>
        </Flex>
        <IconButton
        variant="outline"
          icon={
            colorMode === "light" ? (
              <Flex alignItems="center">
                <MoonIcon mr={2}/>
                <Text>Dark Mode</Text>
              </Flex>
            ) : (
              <Flex alignItems="center">
                <SunIcon mr={2}/>
                <Text>Light Mode</Text>
              </Flex>
            )
          }
          onClick={toggleColorMode}
          mx={[1, 1, 2, 2]}
        />
      </Flex>
    </Flex>
  );
}

export default Footer;
