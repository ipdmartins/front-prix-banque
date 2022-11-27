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
import { RiArrowRightCircleLine } from "react-icons/ri";
import { AiOutlineUserAdd, AiFillQuestionCircle } from "react-icons/ai";
import { Signin } from "./Signin";
import { useState } from "react";

export function Sidebar() {
  const [logged, setLogged] = useState(false);
  return (
    <Box
      as="aside"
      width="20vw"
      maxWidth="64"
      height="100vh"
      marginRight="2"
      marginBottom="2"
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
            <Link display="flex">
              <Icon as={AiOutlineUserAdd} fontSize="28" />
              <Text marginLeft="2" fontWeight="bold" fontSize="20">
                Sign Up
              </Text>
            </Link>
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
              Bienvenue Igor!
            </Text>
          </Box>
          <Box marginTop="8" textAlign="center">
            <Text marginLeft="2" fontSize="18" fontWeight="bold">
              Menu de navigation
            </Text>
            <Divider orientation="horizontal" />
            <Box marginTop="6" marginLeft="6">
              <Link display="flex">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Relevé
                </Text>
              </Link>
            </Box>
            <Box marginTop="4" marginLeft="6">
              <Link display="flex">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Virement
                </Text>
              </Link>
            </Box>
            <Box marginTop="4" marginLeft="6">
              <Link display="flex">
                <Icon as={RiArrowRightCircleLine} fontSize="28" />
                <Text marginLeft="2" fontSize="18">
                  Facture
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
      <Box marginTop="8" marginLeft="6" textAlign="center" width="84%">
        <Text fontSize="16">{`Besoin d'aide?`}</Text>
        <Card background="gray.50" height="28">
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
