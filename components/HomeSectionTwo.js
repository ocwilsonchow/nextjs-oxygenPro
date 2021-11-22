import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomeSectionTwo() {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  const boxContent = [{}];

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py={[10, 10, 20, "100px"]}
      px={[10, 10, 10, 10]}
      w="100%"
      flexWrap="wrap"
    >
      <Flex flexDir="column" maxW="1000px">
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          m={2}
          align="center"
        >
          Tidy to read, easy to Navigate.
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} m={2} align="center">
          Oxygen Pro is designed for pharmacy students, trainee pharmacists and
          pharmacists to look up medication and treatment information in a
          convenient way.
        </Text>
        <Flex justifyContent="center" m={5} flexWrap="wrap">
          <Box h="250px" w="300px" fontWeight="bold" fontSize="2xl" p={5} m={2} rounded="1rem" bg={bgColor}>
            User Interface
          </Box>
          <Box h="250px" w="300px" fontWeight="bold" fontSize="2xl" p={5} m={2} rounded="1rem" bg={bgColor}>
            User Interface
          </Box>
          <Box h="250px" w="300px" fontWeight="bold" fontSize="2xl" p={5} m={2} rounded="1rem" bg={bgColor}>
            User Interface
          </Box>
          <Box h="250px" w="300px" fontWeight="bold" fontSize="2xl" p={5} m={2} rounded="1rem" bg={bgColor}>
            User Interface
          </Box>
          <Box h="250px" w="300px" fontWeight="bold" fontSize="2xl" p={5} m={2} rounded="1rem" bg={bgColor}>
            User Interface
          </Box>
          <Box h="250px" w="300px" fontWeight="bold" fontSize="2xl" p={5} m={2} rounded="1rem" bg={bgColor}>
            User Interface
          </Box>
        </Flex>
        <Center>
          <Button maxW="300px" mt={5} variant="outline" borderRadius="2rem" colorScheme="whatsapp">
            See how we designed Oxygen
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
}
