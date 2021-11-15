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
    my={10}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      py={20}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      w="90%"
      borderRadius="1.5rem"
    >
         <Text fontSize="6xl" fontWeight="bold" align="center" color="white">
            Clean to Read,
          </Text>
          <Text fontSize="6xl" fontWeight="bold" align="center" color="white">
            Easy to Navigate.
          </Text>
    </Flex>
  );
}
