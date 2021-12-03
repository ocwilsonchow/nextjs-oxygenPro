import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
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
import { getPosts, getTopics } from "../services";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

export default function Authentication({ topics }) {
  const cardColor = useColorModeValue("white", "gray.700");

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

  console.log(user, email, emailVerified);

  const login = async () => {};

  const logout = async () => {};

  return (
    <>
      <Header topics={topics} />
      {user === null && <SignUp />}
      {user === null && <SignIn />}
      {user !==null && email!==undefined && <SignOut />}
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const topics = (await getTopics()) || [];

  return {
    props: { posts, topics },
  };
}
