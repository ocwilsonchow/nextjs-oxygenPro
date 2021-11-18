import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Divider,
  Button,
  Center
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { MdSick } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";
import Link from "next/link";

function Sidebar({ topics, posts }) {
  const categories = [
    { name: "Home", icon: <AiFillHome />, route: "/home" },
    { name: "Minor Ailments", icon: <MdSick />, route: "/minorAilments" },
    {
      name: "Therapeutic Topics",
      icon: <GiMedicines />,
      route: "/therapeutics",
    },
    { name: "Diseases", icon: <FaBookMedical />, route: "/" },
  ];
  const bgColor = useColorModeValue("gray.800", "gray.700");

  return (
    <Flex
      flexDir="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      className="sidebar"
    >
      <Center>
        <Link href="/sponsor" passHref={true}>
          <Button size="sm"  bg={bgColor} >
            <Text fontWeight="bold" color="white"
            >
              Sponsor Our Development 🙌🏻
            </Text>
          </Button>
        </Link>
      </Center>
      <Divider my={3} />
      <Flex flexDir="column" alignItems="flex-start" w="90%" cursor="pointer">
        {categories.map((category, i) => {
          return (
            <Link href={category.route} key={i} passHref={true}>
              <Flex
                alignItems="center"
                key={i}
                fontWeight="bold"
                _hover={{ bg: "blue.400" }}
                borderRadius="2EM"
                _focus={{ boxShadow: "outline" }}
                _active={{ bg: "gold" }}
                px={4}
                py={2}
                my={2}
                w="100%"
                transition="all ease 0.5s"
              >
                <Flex key={i}>{category.name}</Flex>
              </Flex>
            </Link>
          );
        })}
      </Flex>
      <Divider my={3} />

      {topics.therapeuticAreas.map((topic, index) => {
        return (
          <>
            <Link
              href={`/therapeutics/${topic.slug}`}
              key={index}
              passHref={true}
            >
              <Box
                bg="none"
                fontWeight="bold"
                _hover={{ bg: "teal.500" }}
                borderRadius="2EM"
                _focus={{ boxShadow: "outline" }}
                _active={{ bg: "gold" }}
                px={4}
                py={2}
                my={1}
                width="90%"
                transition="all ease 0.5s"
                cursor="pointer"
                key={index}
              >
                {topic.name}
              </Box>
            </Link>
          </>
        );
      })}
      <Divider my={5} />
    </Flex>
  );
}

export default Sidebar;
