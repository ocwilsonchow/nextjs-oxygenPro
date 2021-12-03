import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function SignOut() {
  const cardColor = useColorModeValue("white", "gray.900");
  const cardTwoColor = useColorModeValue("gray.300", "gray.800");

  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [emailVerified, setEmailVerified] = useState();
  const [displayName, setDisplayName] = useState();
  const [username, setUsername] = useState();
  const [message, setMessage] = useState();
 

  const logout = async () => {
    await signOut(auth);
    setEmail();
    setEmailVerified();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (user !== null) {
        const uid = user.dictionary;
        setEmail(user.email);
        setEmailVerified(user.emailVerified);
        setDisplayName(user.displayName);
        return setUser(currentUser);
      } else {
      }
    });
  }, [user]);

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" p={5}>
      <Flex
        px={5}
        py={10}
        bg={cardColor}
        w={["100%", "80%", "500px", "600px"]}
        borderRadius="1rem"
        flexDir="column"
        h="80vh"
      >
        <Text fontWeight="bold" fontSize="4xl" align="center" mb={4}>
          Welcome back! {displayName}
        </Text>
        <Text fontWeight="bold" fontSize="42xl" align="center" mb={4}>
          You are logged in 😉
        </Text>

        {emailVerified == false && (
          <Flex p={4} bg={cardTwoColor} my={1} fontWeight="bold">
            Your email address has not verified, check your email and verify by
            clicking the link provided 😉
          </Flex>
        )}
        <Flex bg={cardTwoColor} flexDir="column" my={1} p={4}>
          <Text fontSize="sm" fontWeight="bold">
            Your registered email: {email}
          </Text>
        </Flex>

        <Flex bg={cardTwoColor} flexDir="column" my={1} p={4}>
          <Text fontSize="sm" fontWeight="bold"> 
            Your username: 
          </Text>
        </Flex>

        <Button my={5} onClick={logout}>
          Sign out
        </Button>
        <Divider />
      </Flex>
    </Flex>
  );
}

export default SignOut;
