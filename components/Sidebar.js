import {
  Flex,
  Button,
  Text,
  Box,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai"
import { MdSick } from "react-icons/md"
import { GiMedicines } from "react-icons/gi"
import { FaBookMedical } from "react-icons/fa"

function Sidebar({ topics }) {
  const categories = [
    { name: "Home", icon: <AiFillHome/>  },
    { name: "Minor Ailments", icon: <MdSick/>  },
    { name: "Drug Treatments", icon: <GiMedicines/>  },
    { name: "Diseases", icon: <FaBookMedical/> },
  ];
  const bgColor = useColorModeValue("gray.100", "gray.900");

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
            <Flex
            alignItems="center"
              key={i}
              fontWeight="bold"
              _hover={{ bg: "blue.400" }}
              borderRadius="3EM"
              _focus={{ boxShadow: "outline" }}
              px={4}
              py={1}
              my={2}
              transition="all ease 0.3s"
            >
              <Flex mr={3} fontSize="xl">{category.icon}</Flex ><Flex >{category.name}</Flex>
            </Flex>
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
