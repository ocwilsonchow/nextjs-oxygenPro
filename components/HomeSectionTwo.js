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
      features: ["Minor ailments", "Common therapeutics", "Forum access"],
    },
    {
      name: "Foundation",
      description: "Designed for trainee pharmacists",
      fee: "HKD 50",
      features: [
        "Minor ailments",
        "Common therapeutics",
        "Note-taking",
        "Forum access",
        "Mentorship",
      ],
    },
    {
      name: "Pharmacist",
      description: "Designed for practising pharmacists",
      fee: "HKD 100",
      features: [
        "Minor ailments",
        "Common therapeutics",
        "Note-taking",
        "Forum access",
        "Mentorship",
      ],
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
          align="center"
        >
          Speed up your revision process
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} m={2} align="center">
          Oxygen Pro is designed for pharmacy students, trainee pharmacists and
          pharmacists to look up medication and treatment information in a
          convenient way.
        </Text>
        <Flex justifyContent="center" m={5} flexWrap="wrap">
          {boxContent.map((content, i) => {
            return (
              <Flex
                h="450px"
                w="300px"
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

                  <Text fontWeight="extrabold" fontSize="4xl" color="teal.400">
                    {content.fee}
                  </Text>
                  <Text fontSize="2xl">Per Month</Text>
                  <Box my={5}>
                    {content.features.map((feature, i) => {
                      return (
                        <Text fontSize="md" fontWeight="light" my={2} key={i}>
                          <CheckCircleIcon mr={3} />
                          {feature}
                        </Text>
                      );
                    })}
                  </Box>
                </Flex>
                <Flex >
                  <Button w="100%" variant="outline" borderRadius="2rem" color="facebook">Start free trial</Button>
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
