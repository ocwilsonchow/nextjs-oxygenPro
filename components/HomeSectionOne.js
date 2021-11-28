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
  ];

  
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" w="100%" bg="black">
      <Text my={10} fontSize="4xl" fontWeight="bold">FAQs</Text>
      <Flex  justifyContent="center" >
        <Accordion maxW="1000px" allowMultiple  bg={bgColor}>
          {content.map((content, index) => {
            return (
              <AccordionItem  key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold" fontSize="2xl">
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
