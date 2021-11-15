import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  HamburgerIcon,
  EditIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Center,
  Flex,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Kbd,
  InputRightElement,
  colorMode,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

function Header({ width, topics }) {
  const { colorMode, toggleColorMode } = useColorMode();
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
        <Flex ml="1%">
          <Text fontWeight="bold" fontSize={["2xl", "2xl", "3xl", "3xl"]}>
            Oxygen
          </Text>
          <Text
            fontSize={["2xl", "2xl", "3xl", "3xl"]}
            fontWeight="bold"
            colorScheme="facebook"
            bgClip="text"
            bgGradient="linear(to-r, gray.500, gray.500, gray.600)"
          >
            Pro
          </Text>
        </Flex>

        <Flex flexWrap="wrap" float="right">
          <Link href="/home" passHref={true}>
            <IconButton icon={<FaHome />} rounded="100%" mx={[1,1,2,2]} />
          </Link>
          <Popover>
            <PopoverTrigger>
              <IconButton icon={<SearchIcon />} mx={[1,1,2,2]} borderRadius="100%">
                Trigger
              </IconButton>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <InputGroup>
                    <Input placeholder="Search the library + Enter" />
                    <InputRightElement mr={5} />
                  </InputGroup>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>

          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            rounded="100%"
            mx={[1,1,2,2]}
          />
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            rounded="100%"
            mx={[1,1,2,2]}
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
              <DrawerHeader></DrawerHeader>
              <DrawerBody
                css={{
                  "&::-webkit-scrollbar": {
                    width: "8px",
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
                <Sidebar topics={topics} />
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
