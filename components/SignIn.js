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
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  const cardColor = useColorModeValue("white", "gray.700");

  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [emailVerified, setEmailVerified] = useState();
  const [displayName, setDisplayName] = useState();

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

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      setUser(user);
      setError();
    } catch (error) {
      console.log(error.message);
      const errorCode = error.code;
      setErrorCode(errorCode);
      return setError("Opps! Failed to login because");
    }
  };

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" p={5}>
      <Flex
        p={10}
       
        w={["100%", "80%", "400px", "400px"]}
     
        flexDir="column"
      >
        <Text fontWeight="bold" fontSize="4xl" align="center" mb={8}>
          Sign In
        </Text>
        <FormControl id="email" mb={5}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" mb={5}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </FormControl>
        {error && (
          <Text p={2} bg="tomato" my={2}>
            {error}
            {""}
            {errorCode} 😬
          </Text>
        )}

        <Button mb={5} onClick={login}>
          Sign In
        </Button>
        <Divider />
        <Box mt={5}>Have not got an account? Sign up now</Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
