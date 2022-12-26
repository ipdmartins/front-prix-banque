import {
  Box,
  Divider,
  Center,
  Flex,
  Text,
  Table,
  Tr,
  Th,
  Td,
  Icon,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Virement = [
  {
    Id: 1,
    Montant: 24.51,
    TypeOfTransaction: "Virement",
    ExecutionDate: "05/11/2022",
  },

  {
    Id: 2,
    Montant: 221.51,
    TypeOfTransaction: "Paiement",
    ExecutionDate: "25/09/2022",
  },

  {
    Id: 3,
    Montant: 2423.51,
    TypeOfTransaction: "Paiement",
    ExecutionDate: "15/03/2022",
  },

  {
    Id: 4,
    Montant: 512.51,
    TypeOfTransaction: "Paiement",
    ExecutionDate: "15/03/2022",
  },

  {
    Id: 5,
    Montant: 512.51,
    TypeOfTransaction: "Virement",
    ExecutionDate: "22/04/2022",
  },
];

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Montant",
    accessor: "montant",
  },
  {
    Header: "TypeOfTransaction",
    accessor: "typeOfTransaction",
  },
  {
    Header: "ExecutionDate",
    accessor: "executionDate",
  },
];

export default function TransferHistory() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Dashboard" currentPage="Create a transfer" />
        <Divider orientation="horizontal" />
        <Box marginLeft={8}>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.100">
            Transfers and Payments
          </Text>
        </Box>

        <Box background="gray.100" margin={6} borderRadius={8}>
          <Text
            fontWeight="bold"
            fontSize="18"
            marginTop={4}
            marginLeft={4}
            color="gray.900"
          >
            Receipts
          </Text>
          <Center>
            <Table color="gray.900">
              <Tr>
                <Th>
                  <Text marginRight="6" color="gray.900">
                    ID
                  </Text>
                </Th>
                <Th>
                  <Text marginRight="6" color="gray.900">
                    Amount
                  </Text>
                </Th>
                <Th>
                  <Text marginRight="6" color="gray.900">
                    Transaction type{" "}
                  </Text>{" "}
                </Th>
                <Th>
                  <Text marginRight="6" color="gray.900">
                    Date
                  </Text>{" "}
                </Th>
                <Th>
                  <Text color="gray.900">Download</Text>{" "}
                </Th>
              </Tr>

              {Virement.map((virement) => (
                <Tr key={virement.Id}>
                  <Td>{virement.Id}</Td>
                  {virement.TypeOfTransaction == "Virement" && (
                    <Td color="#db3e00">{virement.Montant} $</Td>
                  )}
                  {virement.TypeOfTransaction == "Paiement" && (
                    <Td color="#40bf80">{virement.Montant} $</Td>
                  )}
                  <Td>{virement.TypeOfTransaction}</Td>
                  <Td>{virement.ExecutionDate}</Td>
                  <a href="http://localhost:3000/invoice/">
                    <Center>
                      <Td color="blue">
                        <Icon as={AiOutlineCloudDownload} fontSize="20" />
                      </Td>
                    </Center>
                  </a>
                </Tr>
              ))}
            </Table>
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
}
