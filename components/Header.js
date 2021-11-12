import React, { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MoonIcon, SunIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  
} from "@chakra-ui/react";
function Header() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


  return (
    <>
      <Flex
        py={5}
        px={5}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Flex ml={8} >
          <Text fontWeight="bold" fontSize="4xl">
            Oxygen
          </Text>
          <Text fontSize="4xl"  fontWeight="bold" colorScheme="facebook" >
            Pro
          </Text>
        </Flex>
       

        <InputGroup maxWidth="400px"  >
          <InputLeftElement
            pointerEvents="none"
          />
          <Input className="search-bar" type="tel" placeholder="Search the library" boxShadow="base" borderRadius="20px"/>
        </InputGroup>

        <Flex flexWrap="wrap" mr={5} float="right" >
        <IconButton
            icon={<SearchIcon />}
            rounded="100%"
            mx={2}
          />
          <IconButton
            icon={<SunIcon />}
            onClick={toggleColorMode}
            rounded="100%"
            mx={2}
          />
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            rounded="100%"
            mx={2}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
