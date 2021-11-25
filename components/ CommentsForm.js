import React, {useState, useEffect} from 'react'
import {Flex, Text, Center, useColorModeValue, Textarea} from "@chakra-ui/react"

function  CommentsForm() {
    const cardColor = useColorModeValue("gray.200", "gray.800");

    return (
        <Flex bg={cardColor}  justifyContent="space-between" w="100%" flexWrap="wrap">
            <Flex flexDir="column" bg={cardColor} border="1px solid gray" my={2} w={["100%","100%","100%","50%"]} p={5}>
                <Text fontWeight="bold" mb={2}>Your Comments</Text>
                <Textarea></Textarea>
            </Flex>
            <Flex flexDir="column" bg={cardColor} border="1px solid gray" my={2} w={["100%","100%","100%","50%"]} p={5}>
                <Text fontWeight="bold" mb={2}>Comments</Text>
            </Flex>
        </Flex>
    )
}

export default  CommentsForm
