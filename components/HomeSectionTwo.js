import {
    Text,
    Flex,
    Button,
    Center,
    Box,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  export default function HomeSectionTwo() {
    const boxColor = useColorModeValue("teal.500", "teal.800")

    return (
      <Flex
        my={[2, 2, 2, 3]}
        justifyContent="center"
        alignItems="center"
        py={[10, 10, 20, 20]}
        px={[10, 10, 20, 20]}
        bg={boxColor}
        w={["90%", "90%", "90%", "60%"]}
        borderRadius="1.5rem"
        flexWrap="wrap"
      >
          <Flex w="50%" >
          
          </Flex>
        <Flex w={["100%","100%","50%","50%"]} flexDir="column" >
          <Text
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            m={2}
            bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            bgClip="text"
          >
            Tidy to Read, Easy to Navigate.
          </Text>
          <Text
            fontSize={["xs", "sm", "md", "xl"]}
            fontWeight="bold"
            m={2}
            color="white"
          >
            Oxygen Pro is designed for pharmacy students, trainee pharmacists and pharmacists to look up medication and treatment information in a convenient way.
          </Text>
        </Flex>
        
      </Flex>
    );
  }
  