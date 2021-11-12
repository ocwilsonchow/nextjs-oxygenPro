import { Flex, Button, Text, Box, IconButton, useColorModeValue } from "@chakra-ui/react";

function Sidebar( {topics} ) {
  const categories = ["Home", "Minor Ailments", "Drug Treatments", "Diseases"];
  
  const bgColor = useColorModeValue("gray.100", "gray.900")
  console.log(topics)

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
      {topics.therapeuticAreas.map((topic, index) => {
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
              key={index}
            >
              {topic.name}
            </Box>
          </>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
