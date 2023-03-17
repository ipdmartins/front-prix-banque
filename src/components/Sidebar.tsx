import {
  Avatar,
  Box,
  Card,
  Divider,
  Icon,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { AiOutlineUserAdd, AiFillQuestionCircle } from "react-icons/ai";
import { Signin } from "./Signin";
import { useEffect, useState } from "react";

interface propsData {
  login: boolean;
}

export function Sidebar({ login }: propsData) {
  const [logged, setLogged] = useState(login);

  useEffect(() => {
    setLogged(login);
  }, [login]);

  return (
    <Box
      as="aside"
      width="20vw"
      maxWidth="64"
      height="100vh"
      marginRight="2"
      backgroundColor="gray.100"
      color="gray.900"
    >
      <Box backgroundColor="gray.600" paddingTop={8}>
        <Text textAlign="center" fontWeight="bold" fontSize="larger">
          NEW BANK
        </Text>
      </Box>
      {!logged && (
        <Box>
          <Signin />
          <Box marginTop="8" marginLeft="6">
            <Tooltip label="Open your account" placement="top-start">
              <NextLink
                href={{
                  pathname: "/connect/signup",
                  query: { previousPage: "Home", currentPage: "Signup" },
                }}
              >
                <Box display="flex">
                  <Icon as={AiOutlineUserAdd} fontSize="28" />
                  <Text marginLeft="2" fontWeight="bold" fontSize="20">
                    Sign Up
                  </Text>
                </Box>
              </NextLink>
            </Tooltip>
          </Box>
        </Box>
      )}
      {logged && (
        <Box>
          <Box marginTop="8" textAlign="center">
            <Tooltip label="Voir mon compte" placement="top-start">
              <Link>
                <Avatar size="xl" name="John Spencer" />
              </Link>
            </Tooltip>
            <Text marginLeft="2" fontSize="18">
              John Spencer
            </Text>
          </Box>
          <Box marginTop="8" textAlign="center">
            <Text marginLeft="2" fontSize="18" fontWeight="bold">
              Navigation menu
            </Text>
            <Divider orientation="horizontal" />
            <NextLink href="/history">
              <Box display="flex" marginTop="6" marginLeft="6">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Statement
                </Text>
              </Box>
            </NextLink>
            <NextLink href="/transfer">
              <Box display="flex" marginTop="6" marginLeft="6">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Payments
                </Text>
              </Box>
            </NextLink>
            <NextLink href="/invoice">
              <Box display="flex" marginTop="6" marginLeft="6">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Invoices
                </Text>
              </Box>
            </NextLink>
          </Box>
        </Box>
      )}
      <Box marginTop="8" marginLeft="6" textAlign="center" width="78%">
        <Text fontSize="16">{`Need help?`}</Text>
        <Card
          background="gray.50"
          height="24"
          borderColor="gray.700"
          border="1px"
        >
          <Link>
            <Text marginLeft="2" marginTop="6" fontSize="16">
              Documentation
            </Text>
            <Icon as={AiFillQuestionCircle} fontSize="28" color="blue.900" />
          </Link>
        </Card>
      </Box>
    </Box>
  );
}
