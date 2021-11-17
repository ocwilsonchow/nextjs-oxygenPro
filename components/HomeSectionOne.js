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
      bg="#25254f"
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
          bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
          bgClip="text"
        >
          You, empowered to live better, healthier.
        </Text>
        <Text
          fontSize={["xs", "sm", "md", "xl"]}
          fontWeight="bold"
          m={2}
          color="white"
        >
          You can easily get the information about medications and diseases on
          Oxygen. Our content is carefully designed and edited to ensure you get all the
          essential information you need. Of course, for those who love to go in depth, we have also got you covered.
        </Text>
        <Button mt={5} color="white" variant="outline" borderRadius="2rem">
          See what you can access on Oxygen
        </Button>
      </Flex>
      <Flex w="50%"></Flex>
    </Flex>
  );
}
