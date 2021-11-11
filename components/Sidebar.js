import { Flex, Button, Text, Box, IconButton } from "@chakra-ui/react";

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
    "Nausea and Labyrinth Disorder",
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
    "Emergency Hormonal Contraception",
    "Hormonal Replacement Therapy",
    "Dysmenorrhoea",
    "Cystitis",
    "Menorrhagia",
  ];

  return (
    <Flex
      flexDir="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      pl={5}
      className="sidebar"
    >
      <Flex mt={5} mb={10} flexDir="column" alignItems="flex-start"  >
      {categories.map((category, i) => {
        return <Button key={i} bg="none" mb={3} fontWeight="bold">{category}</Button>;
      })}
      </Flex>
      {TherapeuticTopics.map((topic) => {
        return (
          <>
            <Button bg="none" mb={2}>
              {topic}
            </Button>
          </>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
