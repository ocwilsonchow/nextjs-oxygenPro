import {
  Flex,
  Button,
  Text,
  Box,
  IconButton,
  useColorModeValue,
  Divider
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { MdSick } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";

function Sidebar({ topics }) {
  const categories = [
    { name: "Home", icon: <AiFillHome /> },
    { name: "Minor Ailments", icon: <MdSick /> },
    { name: "Drug Treatments", icon: <GiMedicines /> },
    { name: "Diseases", icon: <FaBookMedical /> },
  ];
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      flexDir="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      className="sidebar"
    >
      <Flex
        mt={5}
        mb={10}
        flexDir="column"
        alignItems="flex-start"
        w="90%"
        cursor="pointer"
      >
        {categories.map((category, i) => {
          return (
            <Flex
              alignItems="center"
              key={i}
              fontWeight="bold"
              _hover={{ bg: "blue.400" }}
              borderRadius="2EM"
              _focus={{ boxShadow: "outline" }}
              px={4}
              py={2}
              my={2}
              w="100%"
              transition="all ease 0.5s"
            >
              <Flex mr={3} fontSize="xl">
                {category.icon}
              </Flex>
              <Flex>{category.name}</Flex>
            </Flex>
          );
        })}
      </Flex>
      <Text px={4} py={2} fontWeight="bold" fontSize="xl">
        Topics
      </Text>
      {topics.therapeuticAreas.map((topic, index) => {
        return (
          <>
            <Box
              bg="none"
              fontWeight="bold"
              _hover={{ bg: "teal.500" }}
              borderRadius="2EM"
              _focus={{ boxShadow: "outline" }}
              px={4}
              py={2}
              my={2}
              width="90%"
              transition="all ease 0.5s"
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
