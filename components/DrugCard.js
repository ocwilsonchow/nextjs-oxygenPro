import {
  Box,
  Image,
  Badge,
  Button,
  Text,
  Center,
  Code,
  Flex,
  HStack,
  List,
  ListItem,
  ListIcon,
  Tag,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";

function DrugCard({ posts }) {
  const cardBackground = useColorModeValue("gray.200", "gray.800");
  const medicineCategory = {
    bodySystem: "Endocrinology",
    therapeuticClass: "Diabetes",
  };

  return (
    <Flex flexWrap="wrap" p={5}>
      <Flex my={3} mx={5}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          fontWeight="bold"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              {medicineCategory.bodySystem}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              {medicineCategory.therapeuticClass}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Divider orientation="horizontal" mb={5} />
      <Flex flexWrap="wrap" justifyContent="center">
      {posts.map((post, index) => {
        return (
          <GridItem
            key={index}
            m={3}
            p={5}
            bg={cardBackground}
            maxH={1000}
            width="400px"
            borderRadius="lg"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "teal",
                borderRadius: "24px",
              },
            }}
          >
            <Text fontWeight="bold" fontSize="3xl" mb={3}>
              {post.drugName.map((name, i) => {
                return <Text key={i}>{name}</Text>;
              })}
            </Text>
            <Badge colorScheme="messenger" fontSize="md" mb={3}>
              {post.drugClass}
            </Badge>
            <Flex flexDir="column">
              <Text mr={2} fontWeight="bold">
                Brands:
              </Text>
              {post.brandNames.map((brandName, index) => {
                return (
                  <List key={index}>
                    <ListItem my={1} mr={2}>
                      <ListIcon as={AiFillCheckCircle} color="green.500" />
                      {brandName}
                    </ListItem>
                  </List>
                );
              })}
            </Flex>
            <Flex>
              <Text mr={2} fontWeight="bold">
                Indications:
              </Text>
              {post.therapeuticArea.map((area, index) => {
                return (
                  <Text mr={2} key={index}>
                    {area}
                  </Text>
                );
              })}
            </Flex>
            <List flexWrap="wrap" mb={2}>
              <ListItem>
                <Text mr={2} fontWeight="bold">
                  Major Side Effects:
                </Text>
                {post.majorSideEffects.map((se, index) => {
                  return (
                    <Tag my={1} mr={2} key={index} colorScheme="facebook">
                      {se}
                    </Tag>
                  );
                })}
              </ListItem>
              <ListItem>
                <Text mr={2} fontWeight="bold">
                  Serious Side Effects:
                </Text>
                {post.seriousSideEffect.map((se, index) => {
                  return (
                    <Tag my={1} mr={2} colorScheme="red" key={index}>
                      {se}
                    </Tag>
                  );
                })}
              </ListItem>
            </List>
            <List flexWrap="wrap">
              <Text mr={2} fontWeight="bold">
                Warnings:
              </Text>
              {post.warning.map((warning, index) => {
                return (
                  <List key={index}>
                    <ListItem my={1} mr={2}>
                      <ListIcon as={AiFillWarning} color="green.500" />
                      {warning}
                    </ListItem>
                  </List>
                );
              })}
            </List>
            <List flexWrap="wrap">
              <Text mr={2} fontWeight="bold">
                Monitoring Requirement:
              </Text>
              {post.monitoringRequirement.map((requirement, index) => {
                return (
                  <List key={index}>
                    <ListItem my={1} mr={2}>
                      <ListIcon as={AiFillCheckCircle} color="green.500" />
                      {requirement}
                    </ListItem>
                  </List>
                );
              })}
            </List>
            <List flexWrap="wrap">
              <ListItem mr={2} fontWeight="bold">
                Remarks:
              </ListItem>
              {post.remarks.map((remark, index) => {
                return (
                  <List key={index}>
                    <ListItem my={1} mr={2}>
                      <ListIcon as={AiFillCheckCircle} color="green.500" />
                      {remark}
                    </ListItem>
                  </List>
                );
              })}
            </List>
            <Accordion mt={5} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold">Mechanism of Actions</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{post.mechanismOfAction}</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold">Reference</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Button>
                    <a
                      href="https://www.medicines.org.uk/emc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SPC
                    </a>
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        );
      })}
      </Flex>
    </Flex>
  );
}

export default DrugCard;
