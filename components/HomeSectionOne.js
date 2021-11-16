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
      my={[2, 2, 2, 3]}
      justifyContent="center"
      alignItems="center"
      py={[10, 10, 20, 20]}
      px={[10, 10, 20, 20]}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      w={["90%", "90%", "90%", "60%"]}
      borderRadius="1.5rem"
      flexWrap="wrap"
    >
      <Flex w={["100%", "100%", "50%", "50%"]} flexDir="column">
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          m={2}
          color="white"
        >
          Tidy to Read, Easy to Navigate.
        </Text>
        <Text
          fontSize={["xs", "sm", "md", "xl"]}
          fontWeight="bold"
          m={2}
          color="white"
        >
          Oxygen Pro is designed for pharmacy students, trainee pharmacists and
          pharmacists to look up medication and treatment information in a
          convenient way.
        </Text>
      </Flex>
      <Flex w="50%"></Flex>
    </Flex>
  );
}
