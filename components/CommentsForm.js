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
  Code
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
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

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



  return (
    <Flex justifyContent="space-between" w="100%" flexWrap="wrap">
      <Flex
        flexDir="column"
        my={2}
        w={["100%", "100%", "100%", "50%"]}
        p={[1, 1, 2, 2]}
        pr={[0, 0, 0, 10]}
      >
        <Text fontWeight="bold" fontSize="xl" mb={2}>
          Your Comments
        </Text>
        <Flex mb={3} justifyContent="space-between">
          <Code mr={2} >
            🗓{" "}
            {dateState.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Code>

          <Code>
            ⏰{" "}
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            })}
          </Code>
        </Flex>
        <FormControl isRequired>
          <FormLabel fontWeight="bold">Your name</FormLabel>
          <Input
            placeholder="Your name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            mb={3}
            autoComplete="off"
          />
          <FormLabel fontWeight="bold">Your thoughts</FormLabel>
          <Textarea
            value={newComment}
            placeholder="What's on your mind?"
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Flex flexDir="column" w="100%">
            {error !== "" && (
              <Alert mt={3} status="error" bg="teal.500" fontSize="sm">
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
        <Text fontWeight="bold" mb={2} fontSize="xl">
          {topic} Forum
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
              borderRadius="0.5rem"
              py={2}
              px={5}
            >
              <Avatar>
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Flex flexDir="column" w="100%" ml={2} p={2}>
                <Text fontWeight="bold">{comment.username}</Text>
                <Text fontWeight="light" fontFamily="mono">
                  {comment.comment}
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
