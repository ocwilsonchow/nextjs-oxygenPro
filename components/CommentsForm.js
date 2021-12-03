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
  Input,
  Divider,
  FormControl,
  FormLabel,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Tooltip,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Code,
} from "@chakra-ui/react";

import { db } from "../firebase";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function CommentsForm({ topic }) {
  const cardColor = useColorModeValue("gray.200", "gray.700");

  useEffect(() => {
    const collectionRef = collection(db, "comments");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const getComments = async () => {
      const querySnapshot = await getDocs(q);
      setComments(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    return getComments();
  }, []);

  const [newUserName, setNewUserName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [comments, setComments] = useState([]);

  const createComment = async () => {
    if (newComment === "" || newUserName === "") {
      setSuccess();
      return setError("Input cannot be empty");
    }
    try {
      await addDoc(collection(db, "comments"), {
        comment: newComment,
        username: newUserName,
        timestamp: serverTimestamp(),
        topic: topic,
      });
      setSuccess(true);
    } catch (error) {
      const errorCode = error.code;
      setError(errorCode);
      return setError("There is an error");
    }
    setError("");
    setNewComment("");
    setNewUserName("");
    console.log(error);
  };

  const handleClick = () => {
    const collectionRef = collection(db, "comments");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const getComments = async () => {
      const querySnapshot = await getDocs(q);
      setComments(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    return getComments();
  };

  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Flex justifyContent="space-between" w="100%" flexWrap="wrap">
      <Flex
        flexDir="column"
        my={2}
        w={["100%", "100%", "100%", "48%"]}
        borderRadius="0.5rem"
      >
        <Text fontWeight="bold" fontSize="xl" my={2}>
          Your Comments
        </Text>
        <Flex mb={3} justifyContent="space-between"></Flex>
        <FormControl isRequired>
          <FormLabel fontWeight="bold">Your Name</FormLabel>
          <Input
            placeholder="Your name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            mb={3}
            autoComplete="off"
            borderColor={borderColor}
          />
          <FormLabel fontWeight="bold">Your Thoughts</FormLabel>
          <Textarea
            value={newComment}
            placeholder="What's on your mind?"
            onChange={(e) => setNewComment(e.target.value)}
            borderColor={borderColor}
          />
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            {error !== "" && (
              <Alert
                mt={3}
                status="error"
                bg="gray.700"
                color="white"
                fontSize="sm"
              >
                <AlertIcon />
                <AlertDescription>{error}</AlertDescription>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setError("")}
                />
              </Alert>
            )}
            {success === true && (
              <Alert
                mt={3}
                status="success"
                colorScheme="whatsapp"
                bg="teal.800"
                fontSize="sm"
              >
                <AlertIcon />
                <AlertDescription>Comment submitted</AlertDescription>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setSuccess()}
                />
              </Alert>
            )}
            <Button
              my={10}
              type="submit"
              onClick={() => {
                createComment();
                handleClick();
                setNewComment("");
                setNewUserName("");
              }}
              colorScheme="facebook"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </Flex>

      {/* mockup comment */}
      <Flex
        flexDir="column"
        my={2}
        w={["100%", "100%", "100%", "50%"]}
        p={[1, 1, 2, 2]}
      >
        <Text fontWeight="bold" mb={5} fontSize="xl">
          Forum
        </Text>
        {comments.map((comment, index) => {
          return (
            <Flex
              mb={4}
              key={comment.id}
              w="100%"
              justifyContent="center"
              alignItems="center"
              bg={cardColor}
              py={2}
              px={5}
              borderLeft="0.5rem solid lightBlue"
              borderRadius="0.5rem"
            >
              <Avatar name={comment.username}>
                <AvatarBadge boxSize="1.25em" bg="blue.500" />
              </Avatar>
              <Flex flexDir="column" w="100%" ml={2} p={2}>
                <Text fontWeight="bold">{comment.username}</Text>
                <Text fontWeight="light" fontFamily="mono">
                  {comment.comment}
                </Text>
                <Text
                  opacity="0.3"
                  fontWeight="light"
                  fontSize="xs"
                  fontFamily="mono"
                >
                  Topic: {comment.topic},{" "}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default CommentsForm;
