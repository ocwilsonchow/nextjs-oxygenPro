import React, { useState, useRef, useEffect } from "react";
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
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const cardColor = useColorModeValue("white", "gray.700");

  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const register = async () => {
    if (registerPassword !== registerConfirmPassword) {
      return setError("Opps! Password do not match 😬");
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      sendEmailVerification(auth.currentUser);
      setError("");
      setErrorCode("");
    } catch (error) {
      const errorCode = error.code;
      setErrorCode(errorCode);
      console.log(error);
      return setError("Opps! Failed to create an account because ");
    }
  };

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" p={5}>
      <Flex
        p={10}
        bg={cardColor}
        w={["100%", "80%", "400px", "400px"]}
       
        flexDir="column"
      >
        <Text fontWeight="bold" fontSize="4xl" align="center" mb={8}>
          Create Account
        </Text>

        <FormControl id="email" mb={5}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" mb={5}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="confirm-password" mb={5}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setRegisterConfirmPassword(e.target.value);
            }}
          />
        </FormControl>
        <Button mb={5} onClick={register}>
          Create account
        </Button>
        {error && (
          <Flex p={5} bg="teal.800" color="white">
            {error}{""}
            {errorCode} 😉
          </Flex>
        )}
        <Divider />
        <Box mt={5}>Already have an account? Log in to Oxygen</Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
