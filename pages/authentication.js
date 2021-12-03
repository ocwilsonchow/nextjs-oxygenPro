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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
import Footer from "../components/Footer";

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

  const login = async () => {};

  const logout = async () => {};

  return (
    <>
      <Header topics={topics} />
      <Flex justifyContent="center" w="100%" mb={10} h="80vh">
        <Tabs
        p={2}
          bg={cardColor}
          size="md"
          variant='enclosed'
          borderRadius="0.5rem"
          boxShadow=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          isFitted
       >
          <TabList>
            <Tab  fontWeight="bold">Sign In</Tab>
            <Tab  fontWeight="bold">Create Account</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>{user === null && <SignIn />}</TabPanel>
            <TabPanel>{user === null && <SignUp />}</TabPanel>
          </TabPanels>
        </Tabs>

        {user !== null && email !== undefined && <SignOut />}
      </Flex>
      <Footer />
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
