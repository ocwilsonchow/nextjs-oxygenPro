import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  useColorModeValue,
  AvatarGroup,
  AvatarBadge,
  Avatar,
  Stack,
} from "@chakra-ui/react";

export default function HomeSectionOne() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py={[10, 10, 20, "150px"]}
      px={[10, 10, 10, 10]}
      borderRadius="1.5rem"
      flexWrap="wrap"
    >
      <Flex flexDir="column" maxW="1000px">
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          m={2}
          align="center"
         
        >
          You, empowered to live better, healthier.
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} align="center" m={2}>
          You can easily get the information about medications and diseases on
          Oxygen. Our content is carefully designed and edited to ensure you get
          all the essential information you need. Of course, for those who love
          to go in depth, we have also got you covered.
        </Text>
        <Flex justifyContent="center" m={5} flexWrap="wrap"></Flex>
        
        <Center>
          <Button mt={10} variant="outline" borderRadius="2rem" maxW="300px " colorScheme="whatsapp">
            Learn more
          </Button>
        </Center>
      </Flex>
      <Flex w="50%"></Flex>
    </Flex>
  );
}
