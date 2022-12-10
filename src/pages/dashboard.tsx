import {
  Box,
  Card,
  Center,
  Flex,
  HStack,
  Icon,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useRouter } from "next/router";
import {
  FaEye,
  FaPlusCircle,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaFileAlt,
  FaCreditCard,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import GlobalUser from "../components/GlobalUser";

interface userProps {
  account: String;
  address: String;
  email: String;
  id: String;
  name: String;
  password: String;
  phone: String;
}

export default function Dashboard() {
  const router = useRouter();
  const {
    query: { data },
  } = router;
  const [user, setUser] = useState(null);

  useEffect(() => {
    let userData;
    if (data) {
      userData = JSON.parse(String(data));
      GlobalUser.environmentUser.push(userData);
    } else {
      userData = GlobalUser.environmentUser[0];
    }
    setUser(userData);
  }, []);

  return (
    <Flex direction="row" marginBottom="8">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Home" currentPage="Dashboard" />
        <Center>
          <Box>
            <Text fontWeight="bold" fontSize="24" marginTop="0" color="gray.900">
              Bienvenue dans votre Dashboard de gestion financière
            </Text>
          </Box>
        </Center>
        <Center marginTop="4">
          <HStack spacing="24" width="50%">
            <Box>
              <Text marginLeft="2" fontSize="18" fontWeight="bold">
                Solde de compte 1 :
              </Text>
              <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
                width="200px"
              >
                <HStack>
                  <Text fontSize="20">CAD 155.00</Text>
                  <Spacer />
                  <Icon as={FaEye} fontSize="24" color="grey.900" />
                </HStack>
              </Card>
            </Box>
            <Box>
              <Text marginLeft="2" fontSize="18" fontWeight="bold">
                Solde de compte 2 :
              </Text>
              <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
                width="200px"
              >
                <HStack>
                  <Text fontSize="20">CAD 49.00</Text>
                  <Spacer />
                  <Icon as={FaEye} fontSize="24" color="grey.900" />
                </HStack>
              </Card>
            </Box>
          </HStack>
        </Center>

        <Center marginTop="6">
          <Box width="80%">
            <HStack spacing="2">
              <Text marginLeft="1" fontSize="18" fontWeight="bold">
                Relevé de compte
              </Text>
              <Icon as={FaPlusCircle} fontSize="18" color="grey.900" />
            </HStack>

            <Card
              variant="outline"
              border="1px"
              borderRadius="10"
              borderColor="gray.200"
              backgroundColor="white"
              padding="1"
            >
              <TableContainer margin="0">
                <Table variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>Nom</Th>
                      <Th>Date</Th>
                      <Th>Somme</Th>
                    </Tr>
                  </Thead>
                  <Tbody marginTop="0">
                    <Tr>
                      <Td>
                        <Icon
                          as={FaArrowCircleDown}
                          color="crimson"
                          alignItems="center"
                          fontSize="18"
                        />
                      </Td>
                      <Td>
                        <Text
                          alignItems="center"
                          fontSize="18"
                          fontWeight="bold"
                        >
                          Netflix
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          alignItems="center"
                          fontSize="18"
                          color="darkgray"
                        >
                          27 March 2020, at 12:30 PM
                        </Text>
                      </Td>
                      <Td>
                        <Text alignItems="center" fontSize="18" color="crimson">
                          -$2500
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Icon
                          as={FaArrowCircleUp}
                          alignItems="center"
                          fontSize="18"
                          color="chartreuse"
                        />
                      </Td>
                      <Td>
                        <Text
                          alignItems="center"
                          fontSize="18"
                          fontWeight="bold"
                        >
                          Apple
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          alignItems="center"
                          fontSize="18"
                          color="darkgray"
                        >
                          27 March 2020, at 12:30 PM
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          alignItems="center"
                          fontSize="18"
                          color="chartreuse"
                        >
                          +2500
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </Center>
        <Center marginTop="6">
          <Box width="80%">
            <HStack spacing="2">
              <Text marginLeft="1" fontSize="18" fontWeight="bold">
                Virement
              </Text>
              <Icon as={FaPlusCircle} fontSize="18" color="grey.900" />
            </HStack>
            <Card
              variant="outline"
              border="1px"
              borderRadius="10"
              borderColor="gray.200"
              backgroundColor="white"
              padding="1"
            >
              <TableContainer margin="0">
                <Table variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th>Nom</Th>
                      <Th>Information</Th>
                      <Th>Edit</Th>
                    </Tr>
                  </Thead>
                  <Tbody marginTop="0">
                    <Tr>
                      <Td fontSize="16" fontWeight="bold">
                        Oliver Liam
                      </Td>
                      <Td>
                        <ul>
                          <li>Company Name : Viking Burrito</li>
                          <li>Email Adresse : oliver@burritoViking.com</li>
                          <li>VAT number : FRB12345679</li>
                        </ul>
                      </Td>
                      <Td>
                        <Icon
                          as={FaCreditCard}
                          fontSize="20"
                          color="grey.900"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </Center>

        <Center marginTop="6">
          <Box width="80%">
            <HStack spacing="2">
              <Text marginLeft="1" fontSize="18" fontWeight="bold">
                Facture
              </Text>
              <Icon as={FaPlusCircle} fontSize="18" color="grey.900" />
            </HStack>
            <Card
              variant="outline"
              border="1px"
              borderRadius="10"
              borderColor="gray.200"
              backgroundColor="white"
              padding="1"
            >
              <TableContainer margin="0">
                <Table variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th>Date</Th>
                      <Th>Nom</Th>
                      <Th>Somme</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody marginTop="0">
                    <Tr>
                      <Td>
                        <Text fontSize="18" fontWeight="bold">
                          March, 01, 2020
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="18" color="darkgray">
                          #MS-415646
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="18" color="crimson">
                          $180
                        </Text>
                      </Td>
                      <Td>
                        <Icon
                          textAlign="center"
                          fontSize="18"
                          as={FaFileAlt}
                          color="grey"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
}
