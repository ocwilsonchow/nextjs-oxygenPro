import React, {useState, useRef, useEffect} from "react";
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
import {getAuth } from "firebase/auth"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import SignOut from "../components/SignOut";

export default function Authentication({ topics }) {
  const cardColor = useColorModeValue("white", "gray.700");

  const register = () => {

  }

  const login = () => {

  }

  const logout = () => {
    
  }


  return (
    <>
      <Header topics={topics} />
      <SignUp />
      <SignIn />
      <SignOut />
      
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
