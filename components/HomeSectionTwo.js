import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomeSectionTwo() {
  const bgColor = useColorModeValue("teal.500", "teal.800");

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py={[10, 10, 20, "100px"]}
      px={[10, 10, 10, 10]}
      w="100%"
      flexWrap="wrap"
      bg={bgColor}
    >
      <Flex flexDir="column" maxW="1000px">
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          m={2}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          align="center"
        >
          Tidy to read, easy to Navigate.
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} m={2} align="center">
          Oxygen Pro is designed for pharmacy students, trainee pharmacists and
          pharmacists to look up medication and treatment information in a
          convenient way.
        </Text>
        <Center>
          <Button maxW="300px" mt={5} variant="outline" borderRadius="2rem">
            See how we designed Oxygen
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
}
