import React from "react";
import {
  Flex,
  Text,
  List,
  ListIcon,
  Divider,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
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
    {
      category: "Endocrine System",
      topic: [],
    },
    {
      category: "Respiratory System",
      topic: [],
    },
    {
      category: "Dermatology",
      topic: [],
    },
    {
      category: "Gastrointestinal System",
      topic: [],
    },
  ];

  const cardBackgroundColor = useColorModeValue("gray.200", "gray.800");
  const borderColor = useColorModeValue("gray.400", "gray.700")

  return (
    <Flex p={2} flexWrap="wrap">
      {categories.map((card, i) => {
        return (
          <Flex
            key={i}
            flexDir="column"
            p={5}
            m={2}
            bg={cardBackgroundColor}
            w={["100%", "100%", "45%", "23.5%"]}
            borderRadius="15px"
          >
            <Text
              fontWeight="bold"
              px={2}
              fontSize={["lg", "lg", "3xl", "3xl"]}
              color="green.500"
            >
              {card.category}
            </Text>
            <List my={2}>
              {card.topic.map((title, i) => {
                return (
                  <div>
                    <ListItem
                      fontSize={["xs", "sm", "lg", "lg"]}
                      fontWeight="bold"
                      cursor="pointer"
                      _hover={{ bg: "blue.600" }}
                      transition="all ease 0.5s"
                      py={1}
                      px={2}
                      my={1}
                      key={i}
                      borderRadius="xl"
                    >
                      {title}
                    </ListItem>
                    <Divider my={1} borderColor={borderColor}/>
                  </div>
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
