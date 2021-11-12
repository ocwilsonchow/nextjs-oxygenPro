import React from 'react'
import { Flex, Divider } from '@chakra-ui/react'

function Gadget() {
    return (
        <Flex flexDir="column" p={5}>
          <Flex my={3} mx={5} fontWeight="bold" >Treatment Guideline</Flex>  
          <Divider orientation="horizontal" />
          
        </Flex>
    )
}

export default Gadget
