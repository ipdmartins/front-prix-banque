import {
  Flex,
  Input,
  Text,
  Icon,
  HStack,
  Box,
  Avatar,
  Spacer,
  VStack,
  Divider,
  Link,
} from "@chakra-ui/react";
import {
  RiUserReceived2Fill,
  RiArrowRightSLine,
  RiUserAddLine,
} from "react-icons/ri";
import { AiTwotoneBell, AiTwotoneSetting } from "react-icons/ai";

interface HeaderProps {
  previousPage: string;
  currentPage: string;
}

export function Header({ previousPage, currentPage }: HeaderProps) {
  return (
    <Flex
      as="header"
      // width="80vw"
      // maxWidth="310"
      // height="20"
      // marginX="auto"
      // marginTop="4"
      // paddingX="6"
      // textAlign="right"
    >
      <HStack p="4" spacing="2">
        <Link>{previousPage}</Link>
        <Icon as={RiArrowRightSLine} fontSize="20" />
        <Text fontSize="14">{currentPage}</Text>
      </HStack>
      <Spacer />
      <HStack spacing="4" display="flex" marginRight="8">
        <HStack marginRight="6">
          <Icon as={RiUserReceived2Fill} fontSize="20" />
          <Text fontSize="14" fontWeight="bold">
            Sign out
          </Text>
        </HStack>
        <Icon as={AiTwotoneSetting} fontSize="20" />
        <Icon as={AiTwotoneBell} fontSize="20" />
      </HStack>
    </Flex>
  );
}
