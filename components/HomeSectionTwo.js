import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function HomeSectionTwo() {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  const boxContent = [
    {
      name: "Student",
      description: "Designed for pharmacy students",
      fee: "Free",
      features: ["Minor ailments", "Common therapeutics", "Top 100 Drugs"],
      advancedFeatures: [],
      proFeatures: [],
    },
    {
      name: "Foundation",
      description: "Designed for trainee pharmacists",
      fee: "HKD 50",
      features: ["Minor ailments", "Common therapeutics", "Top 100 Drugs"],
      advancedFeatures: ["Forum access", "Note taking", "Mentorship"],
      proFeatures: [],
    },
    {
      name: "Pro",
      description: "Designed for practising pharmacists",
      fee: "HKD 100",
      features: ["Minor ailments", "Common therapeutics", "Top 100 Drugs"],
      advancedFeatures: ["Forum access", "Note taking", "Mentorship"],
      proFeatures: ["Live online chat group", "Unlimited note-taking"],
    },
  ];

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      py={[10, 10, 20, "100px"]}
      flexWrap="wrap"
      w="100%"
    >
      <Flex flexDir="column" justifyContent="center" maxW="1000px">
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          m={2}
          mx={5}
          align="center"
        >
          Speed up your revision process.
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} my={2} mx={5} align="center">
          Oxygen Pro is designed for pharmacy students, trainee pharmacists and
          pharmacists to look up medication and treatment information in a
          convenient way.
        </Text>
        <Flex justifyContent="center" m={5} flexWrap="wrap">
          {boxContent.map((content, i) => {
            return (
              <Flex
                w={["100%", "80%", "300px", "300px"]}
                fontWeight="bold"
                fontSize="xl"
                p={(5, 5, 5, 10)}
                m={2}
                rounded="1rem"
                bg={bgColor}
                key={i}
                flexDir="column"
                justifyContent="space-between"
              >
                <Flex flexDir="column" fontSize="3xl">
                  <Text>{content.name}</Text>

                  <Text
                    fontWeight="extrabold"
                    fontSize="5xl"
                    color="teal.400"
                    bgClip="text"
                    bgGradient="linear(to-r, gray.400, yellow.400, pink.300)"
                    flexWrap="wrap"
                  >
                    {content.fee}
                  </Text>
                  <Text fontSize="2xl">Per Month</Text>
                  <Box my={5} fontWeight="normal">
                    {content.features.map((feature, i) => {
                      return (
                        <Text fontSize="md" my={2} key={i}>
                          <CheckCircleIcon mr={3} />
                          {feature}
                        </Text>
                      );
                    })}
                    {content.advancedFeatures.map((feature, i) => {
                      return (
                        <Text fontSize="md" my={2} key={i}>
                          <CheckCircleIcon mr={3} />
                          {feature}
                        </Text>
                      );
                    })}
                    {content.proFeatures.map((feature, i) => {
                      return (
                        <Text fontSize="md" my={2} key={i}>
                          <CheckCircleIcon mr={3} />
                          {feature}
                        </Text>
                      );
                    })}
                  </Box>
                </Flex>
                <Flex>
                  <Button
                    w="100%"
                    variant="outline"
                    borderRadius="2rem"
                    color="facebook"
                  >
                    Start free trial
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Center>
          <Button maxW="300px" mt={5} variant="outline" borderRadius="2rem">
            See how we designed Oxygen
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
}
