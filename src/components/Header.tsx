import { Flex, Text, Icon, HStack, Spacer } from "@chakra-ui/react";
import { RiUserReceived2Fill, RiArrowRightSLine } from "react-icons/ri";
import { AiTwotoneBell, AiTwotoneSetting } from "react-icons/ai";
import NextLink from "next/link";

interface HeaderProps {
  previousPage: string;
  currentPage: string;
}

export function Header({ previousPage, currentPage }: HeaderProps) {
  return (
    <Flex as="header" height="12" marginTop="4">
      {previousPage !== "Home" && (
        <HStack p="4" spacing="2">
          <NextLink href={`/${previousPage.toLowerCase()}`}>
            {previousPage}
          </NextLink>
          <Icon as={RiArrowRightSLine} fontSize="20" />
          <Text fontSize="14">{currentPage}</Text>
        </HStack>
      )}
      <Spacer />
      <HStack spacing="4" display="flex" marginRight="8">
        <HStack marginRight="6">
          <Icon as={RiUserReceived2Fill} fontSize="20" />
          <NextLink href={`/`}>
            <Text fontSize="14" fontWeight="bold">
              Sign out
            </Text>
          </NextLink>
        </HStack>
        <Icon as={AiTwotoneSetting} fontSize="20" />
        <Icon as={AiTwotoneBell} fontSize="20" />
      </HStack>
    </Flex>
  );
}
