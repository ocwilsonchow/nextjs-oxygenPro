import React from "react";
import { Flex, Text, List, ListIcon, ListItem,  useColorModeValue } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function TherapeuticCategory() {
  const categories = [
    {
      category: "Cardiovascular",
      topic: [
        "Hypertension",
        "Myocardial infarction",
        "Hyperlipidaemia",
        "Venous thromboembolism",
        "Stroke",
        "Atrial fibrillation",
        "Heart failure",
        "Angina",
      ],
    },
    {
      category: "Central Nervous System",
      topic: [
        "Depression",
        "Anxiety",
        "Bipolar disorder",
        "Schizophrenia",
        "Parkinsons disease",
        "Dementia",
        "Nausea and labyrinth disease",
        "Insomnia",
      ],
    },
  ];

  const cardBackgroundColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Flex p={2} flexWrap="wrap">
      {categories.map((card, i) => {
        return (
          <Flex key={i} flexDir="column" p={5} m={2} bg={cardBackgroundColor} w="300px" borderRadius="15px">
            <Text fontWeight="bold" fontSize="3xl" >
              {card.category}
            </Text>
            <List my={2}>
              {card.topic.map((title, i) => {
                return (
                  <ListItem
                    fontWeight="bold"
                    cursor="pointer"
                    _hover={{ bg: "blue.600" }}
                    transition="all ease 0.5s"
                    px={2}
                    py={1}
                    my={1}
                    key={i}
                    borderRadius="lg"
                  >
                    {title}
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        );
      })}
    </Flex>
  );
}
export default TherapeuticCategory;
