import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Center,
  useColorModeValue,
  Textarea,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";

function CommentsForm({topic}) {
  const cardColor = useColorModeValue("gray.200", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.700");

  const comments = [
    {
      name: "Wilson ",
      avatar: "",
      id: "1",
      comment: "Hello everyone, this forum is built for the whole community!",
      date: "25-11-2021",
    },
    {
      name: "Elon Mask",
      avatar: "",
      id: "2",
      comment: "Awesome!",
      date: "25-11-2021",
    },
    {
      name: "Steven Jobs",
      avatar: "",
      id: "3",
      comment: "Love it!",
      date: "25-11-2021",
    },
  ];

  return (
    <Flex justifyContent="space-between" w="100%" flexWrap="wrap">
      <Flex flexDir="column" my={2} w={["100%", "100%", "100%", "50%"]} p={[1,1,2,2]}>
        <Text fontWeight="bold" mb={2}>
          Your Comments
        </Text>
        <Textarea borderColor={borderColor}></Textarea>
      </Flex>
      <Flex flexDir="column" my={2} w={["100%", "100%", "100%", "50%"]} p={[1,1,2,2]}>
        <Text fontWeight="bold" mb={2}>
          Comments related to {topic}
        </Text>
        {comments.map((comment, index) => {
          return (
            <Flex
              mb={4}
              key={index}
              w="100%"
              justifyContent="center"
              alignItems="center"
              bg={cardColor}
              borderRadius="1rem"
              p={2}
            >
              <Avatar>
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Flex flexDir="column" w="100%" ml={2} p={2}>
                <Text fontWeight="bold">{comment.name}</Text>
                <Text>{comment.comment}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default CommentsForm;
