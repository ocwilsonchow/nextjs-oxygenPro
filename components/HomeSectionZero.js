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
import Link from "next/link";

function HomeSectionZero() {
  const bgColor = useColorModeValue("white", "gray.900");

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
          We connect people from every corner of the world.
        </Text>
        <Text fontSize={["xs", "sm", "md", "xl"]} m={2} mb={10} align="center">
          We have integrated an interaction function in our library. You can
          chat with other users who are online. You can also comment, make notes
          and request improvement on each of the content in the library. By
          building a user network, we can leverage the power of people to
          enhance our content as well as the experience of using this library.
        </Text>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Avatar src="http://prod-upp-image-read.ft.com/c3891ea0-d3b2-11e9-8d46-8def889b4137">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Avatar src="https://image.cnbcfm.com/api/v1/image/106926992-1628885077267-elon.jpg?v=1635173166">
            <AvatarBadge
              borderColor="papayawhip"
              bg="tomato"
              boxSize="1.25em"
            />
          </Avatar>
          <Avatar src="https://image.cnbcfm.com/api/v1/image/105931782-1558695236322gettyimages-96211512.jpeg?v=1633528274">
            <AvatarBadge borderColor="blue.500" bg="blue" boxSize="1.25em" />
          </Avatar>
          <Avatar src="https://static01.nyt.com/images/2020/02/22/business/22berkshire1/22berkshire1-mobileMasterAt3x.jpg">
            <AvatarBadge borderColor="gold" bg="green" boxSize="1.25em" />
          </Avatar>
        </Stack>
        <Center>
          <Link href="/about" passHref={true}>
            <Button mt={10} variant="outline" borderRadius="2rem" maxW="300px">
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
