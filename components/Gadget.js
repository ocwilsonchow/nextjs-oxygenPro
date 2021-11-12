import React from 'react'
import { Flex, Divider } from '@chakra-ui/react'

function Gadget() {
    return (
        <Flex  p={2} width="100%" >
          <Flex my={3} mx={5} fontWeight="bold" fontSize="3xl">Treatment Guideline</Flex>  
          {/* <Divider orientation="horizontal" /> */}
          
        </Flex>
    )
}

export default Gadget
