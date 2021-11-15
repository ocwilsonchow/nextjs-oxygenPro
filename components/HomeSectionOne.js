import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomeSectionOne() {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
         <Text fontSize="7xl" fontWeight="bold" align="center">
            Clean to Read
          </Text>
    </Flex>
  );
}
