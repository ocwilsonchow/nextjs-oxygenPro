import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function HomeSectionOne() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const content = [
    {
      title: "What is Oxygen Pro?",
      description:
        "Oxygen Pro is an online platform designed for pharmacy students and pharmacists to revisit pharmacy knowledge.",
    },
    {
      title: "Is Oxygen Pro free?",
      description: "Oxygen Pro Student is free for everyone.",
    },
    {
      title: "How does the mentorship programme work?",
      description:
        "We collaborate with practising pharmacists and assign one of them to be your tutor according to your preference and personal profile.",
    },
    {
      title: "Is Oxygen Pro free?",
      description: "Oxygen Pro Student is free for everyone.",
    },
  ];

  return (
    <Flex bg={bgColor} w="100%" justifyContent="center" py={10}>
      
      <Flex w="100%" maxW="1000px">
        <Accordion allowMultiple m={5} w="100%">
          <Center mb={10} fontWeight="bold" fontSize={["2xl","3xl","3xl","4xl"]}>In case you missed anything.</Center>
          {content.map((content, index) => {
            return (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      my={3}
                      fontSize="xl"
                    >
                      {content.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{content.description}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
    </Flex>
  );
}
