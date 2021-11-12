import { Flex, Button, Text, Box, IconButton, useColorModeValue } from "@chakra-ui/react";

function Sidebar() {
  const categories = ["Home", "Minor Ailments", "Drug Treatments", "Diseases"];
  const TherapeuticTopics = [
    "Asthma",
    "COPD",
    "Diabetes",
    "Hyperlipidaemia",
    "Hypertension",
    "Heart Failure",
    "Myocardial Infarction",
    "Venous Thromboembolism",
    "Stroke",
    "Atrial Fibrillation",
    "Depression",
    "Anxiety",
    "Bipolar Disorder",
    "Schizophrenia",
    "Parkinson's Disease",
    "Dementia",
    "Nausea and Labyrinth",
    "Oncology",
    "Insomnia",
    "Migraine",
    "Epilepsy",
    "Thyroid Disorders",
    "Glaucoma",
    "Gout",
    "Rheumatoid Arthritis",
    "Chronic Bowel Disease",
    "Constipation",
    "Hormonal Contraception",
    "EHC",
    "HRT",
    "Dysmenorrhoea",
    "Cystitis",
    "Menorrhagia",
  ];
  const bgColor = useColorModeValue("gray.100", "gray.900")

  return (
    <Flex
      flexDir="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      className="sidebar"
      
    >
      <Flex mt={5} mb={10} flexDir="column" alignItems="flex-start">
        {categories.map((category, i) => {
          return (
            <Box
              key={i}
              fontWeight="bold"
              _hover={{ bg: "teal.600" }}
              borderRadius="3EM"
              _focus={{ boxShadow: "outline" }}
              px={4}
              py={1}
              my={1}
              transition="all ease 0.3s"
            >
              {category}
            </Box>
          );
        })}
      </Flex>
      {TherapeuticTopics.map((topic) => {
        return (
          <>
            <Box
              bg="none"
              fontWeight="bold"
              _hover={{ bg: "teal.500" }}
              borderRadius="3EM"
              _focus={{ boxShadow: "outline" }}
              px={4}
              py={1}
              my={2}
              transition="all ease 0.3s"
              cursor="pointer"
            >
              {topic}
            </Box>
          </>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
