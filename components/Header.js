import React, { useRef } from "react";
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
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Badge,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

function Header({ width, topics }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Flex
        py={3}
        px={5}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        w="100%"
      >
        <Flex ml="1%" alignItems="center">
          <Text fontWeight="bold" fontSize={["2xl", "2xl", "3xl", "3xl"]}>
            Oxygen
          </Text>
          <Text
            fontSize={["2xl", "2xl", "3xl", "3xl"]}
            fontWeight="bold"
            colorScheme="facebook"
            bgClip="text"
            bgGradient="linear(to-r, gray.500, gray.500, gray.600)"
            cursor="pointer"
          >
            Pro
          </Text>
        </Flex>

        <Flex flexWrap="wrap" float="right">
          <Link href="/home" passHref={true}>
            <IconButton icon={<FaHome />} rounded="100%" mx={[1, 1, 2, 2]} />
          </Link>
          <Link href="/signIn" passHref={true}>
            <IconButton icon={<LockIcon />} rounded="100%" mx={[1, 1, 2, 2]} />
          </Link>

          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            rounded="100%"
            mx={[1, 1, 2, 2]}
          />
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            rounded="100%"
            mx={[1, 1, 2, 2]}
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
