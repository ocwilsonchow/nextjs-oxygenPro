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
} from "@chakra-ui/react";
function Header({ width }) {
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
        <Flex ml="1%">
          <Text fontWeight="bold" fontSize="4xl">
            Oxygen
          </Text>
          <Text fontSize="4xl" fontWeight="bold" colorScheme="facebook">
            Pro
          </Text>
        </Flex>

        <Flex flexWrap="wrap" float="right">
          <Popover>
            <PopoverTrigger>
              <IconButton icon={<SearchIcon />} mx={2} borderRadius="100%">
                Trigger
              </IconButton>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                    <InputGroup>
                    <Input placeholder="Search the library" />
                    <InputRightElement mr={5} children={<Kbd>Enter</Kbd>}/>
                    </InputGroup>
                  
                  
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>

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
