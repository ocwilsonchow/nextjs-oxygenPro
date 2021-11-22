import {
  Text,
  Flex,
  Button,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

function HomeSectionZero() {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py={[10, 10, 20, "100px"]}
      px={[10, 10, 20, 20]}
      w="100%"
      flexWrap="wrap"
      bg={bgColor}
    >
      <Flex maxW="1000px" flexDir="column">
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          m={2}
          align="center"
        >
          Revolutionizing your experience in healthcare journey
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} m={2} align="center">
          You can easily get the information about medications and diseases on
          Oxygen. Our content is carefully designed and edited to ensure you get
          all the essential information you need. Of course, for those who love
          to go in depth, we have also got you covered.
        </Text>
        <Center>
          <Link
            href="/about"
            passHref={true}
          >
            <Button
              mt={5}
              variant="outline"
              colorScheme="whatsapp"
              borderRadius="2rem"
              maxW="300px"
            >
              Know more about our team
            </Button>
          </Link>
        </Center>
      </Flex>
      <Flex w="50%"></Flex>
    </Flex>
  );
}

export default HomeSectionZero;
