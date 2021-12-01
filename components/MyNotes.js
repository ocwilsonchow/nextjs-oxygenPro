import React from 'react'
import {Flex, Text} from "@chakra-ui/react"

function MyNotes() {
    return (
        <Flex w="100%" bg="black" p={5} borderLeft="5px solid tomato">
          <Text fontWeight="bold"> My Notes </Text>
        </Flex>
    )
}

export default MyNotes
