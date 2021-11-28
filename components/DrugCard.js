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
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
import Gadget from "./Gadget";

function DrugCard({ posts, width }) {
  const cardBackground = useColorModeValue("gray.200", "gray.800");
  const medicineCategory = {
    bodySystem: "Endocrinology",
    therapeuticClass: "Diabetes",
  };

  return (
    <Flex flexWrap="wrap" p={2}>
      <Flex
        my={2}
        mx={2}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          fontWeight="bold"
        >
          <BreadcrumbItem fontSize="xs">
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem fontSize="xs">
            <BreadcrumbLink href="#">
              {medicineCategory.bodySystem}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem fontSize="xs">
            <BreadcrumbLink href="#">
              {medicineCategory.therapeuticClass}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              bg={cardBackground}
              rightIcon={<ChevronDownIcon />}
            >
              More
            </MenuButton>
            <MenuList>
              <MenuItem>Clinical Guidelines</MenuItem>
              <MenuItem>Interactions</MenuItem>
              <MenuItem>Treatment Summaries</MenuItem>
              <MenuItem>Add to my list</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Divider mb={3} />

      <Tabs>
        <TabList>
          <Tab fontWeight="bold" fontSize="sm">
            Drug Treatment
          </Tab>
          <Tab fontWeight="bold" fontSize="sm">
            {" "}
            Treatment Guidelines
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex flexWrap="wrap" justifyContent="flex-start">
              {posts.map((post, index) => {
                return (
                  <GridItem
                    key={index}
                    m={[1, 1, 2, 2]}
                    p={5}
                    bg={cardBackground}
                    maxH={800}
                    width={width >= 1100 ? "31.5%" : "100%"}
                    borderRadius="lg"
                    overflowY="auto"
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "4px",
                      },
                      "&::-webkit-scrollbar-track": {
                        width: "3px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#1D4044",
                        borderRadius: "24px",
                      },
                    }}
                  >
                    <Text fontWeight="bold" fontSize="3xl" mb={3}>
                      {post.drugName.map((name, i) => {
                        return <Text key={i}>{name}</Text>;
                      })}
                    </Text>
                    <Badge colorScheme="messenger" fontSize="md" mb={3} flexWrap="wrap">
                      {post.drugClass}
                    </Badge>
                    {post.brandNames.length !== 0 && (
                      <Flex flexDir="column">
                        <Text mr={2} fontWeight="bold">
                          Brands:
                        </Text>
                        {post.brandNames.map((brandName, index) => {
                          return (
                            <List key={index}>
                              <ListItem my={1} mr={2}>
                                <ListIcon
                                  as={AiFillCheckCircle}
                                  color="green.500"
                                />
                                {brandName}
                              </ListItem>
                            </List>
                          );
                        })}
                      </Flex>
                    )}
                    <Flex>
                      <Text mr={2} fontWeight="bold">
                        Indications:
                      </Text>
                      {post.indication.map((area, index) => {
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
                            <Tag
                              my={1}
                              mr={2}
                              key={index}
                              colorScheme="facebook"
                            >
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
                    {post.caution.length!==0 &&  <List flexWrap="wrap">
                      <Text mr={2} fontWeight="bold">
                        Cautions:
                      </Text>
                      {post.caution.map((warning, index) => {
                        return (
                          <List key={index}>
                            <ListItem my={1} mr={2}>
                              <ListIcon as={AiFillWarning} color="green.500" />
                              {warning}
                            </ListItem>
                          </List>
                        );
                      })}
                    </List>}
                   {post.monitoringRequirement.length!==0 && <List flexWrap="wrap">
                      <Text mr={2} fontWeight="bold">
                        Monitoring Requirement:
                      </Text>
                      {post.monitoringRequirement.map((requirement, index) => {
                        return (
                          <List key={index}>
                            <ListItem my={1} mr={2}>
                              <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                              />
                              {requirement}
                            </ListItem>
                          </List>
                        );
                      })}
                    </List>}
                    <List flexWrap="wrap">
                      <ListItem mr={2} fontWeight="bold">
                        Remarks:
                      </ListItem>
                      {post.remarks.map((remark, index) => {
                        return (
                          <List key={index}>
                            <ListItem my={1} mr={2}>
                              <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                              />
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
                              <Text fontWeight="bold">
                                Mechanism of Actions
                              </Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          {post.mechanismOfAction}
                        </AccordionPanel>
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
                              Link
                            </a>
                          </Button>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </GridItem>
                );
              })}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Gadget />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Divider orientation="horizontal" mb={5} />
    </Flex>
  );
}

export default DrugCard;
