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
      backgroundColor="blue.500"
    >
      <Box marginTop="8">
        <Text textAlign="center" fontWeight="bold" fontSize="larger">
          PRIX BANQUE
        </Text>
        <Divider orientation="horizontal" />
      </Box>
      {!logged && (
        <Box>
          <Signin />
          <Box marginTop="8" marginLeft="6">
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
          </Box>
        </Box>
      )}
      {logged && (
        <Box>
          <Box marginTop="8" textAlign="center">
            <Tooltip label="Voir mon compte" placement="top-start">
              <Link>
                <Avatar size="xl" name="Igor Martins" />
              </Link>
            </Tooltip>
            <Text marginLeft="2" fontSize="18">
              Igor Martins
            </Text>
          </Box>
          <Box marginTop="8" textAlign="center">
            <Text marginLeft="2" fontSize="18" fontWeight="bold">
              Menu de navigation
            </Text>
            <Divider orientation="horizontal" />
            <NextLink href="/history">
              <Box display="flex" marginTop="6" marginLeft="6">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Relevé
                </Text>
              </Box>
            </NextLink>
            <NextLink href="/transfer">
              <Box display="flex" marginTop="6" marginLeft="6">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Virement
                </Text>
              </Box>
            </NextLink>
            <NextLink href="/invoice">
              <Box display="flex" marginTop="6" marginLeft="6">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Facture
                </Text>
              </Box>
            </NextLink>
          </Box>
        </Box>
      )}
      <Box marginTop="8" marginLeft="6" textAlign="center" width="78%">
        <Text fontSize="16">{`Besoin d'aide?`}</Text>
        <Card background="gray.50" height="24">
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
