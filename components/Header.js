import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Grid,
  GridItem,
  useColorMode,
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
function Header() {
  const categories = ["Minor Ailments", "Drug Treatments", "Diseases"];
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Flex py={5} px={5} justifyContent="space-between" alignItems="center" flexWrap="wrap">
        {/* Icon */}
        <Flex ml={8}>
          <Text fontWeight="bold" fontSize="4xl">
            Oxygen
          </Text>
          <Text fontSize="4xl" fontWeight="bold" color="teal">
            Pro
          </Text>
        </Flex>
        <InputGroup maxWidth="500px">
          <InputLeftElement
            pointerEvents="none"
            // children={<SearchIcon color="gray.300" />}
          />
          <Input type="tel"  placeholder="Search the library"  boxShadow="base"  />
        </InputGroup>

        <Flex flexWrap="wrap" mr={5}>
          {categories.map((category, i) => {
            return (
              <Button key={i} bg="none" fontSize="md" fontWeight="bold" mr={2}>
                {category}
              </Button>
            );
          })}
          <IconButton
            ml={10}
            icon={<SunIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
