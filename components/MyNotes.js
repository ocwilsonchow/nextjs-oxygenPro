import React, {useState, useEffect, useRef} from 'react'
import {Flex, Text, useColorModeValue} from "@chakra-ui/react"

function MyNotes() {
const boxColor = useColorModeValue("gray.200","gray.800")


    return (
        <Flex w="100%" bg={boxColor} p={5} borderLeft="5px solid tomato">
          <Text fontWeight="bold"> My Notes </Text>
        </Flex>

    )
}

export default MyNotes
