import {
  Box,
  Card,
  Divider,
  Flex,
  Text,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

const Factures = [
  {
    Id: 1,
    Nom: "Eduardo Mendes",
    Email: "eduardo.mendes@gmail.com",
    Montant: 152.1,
    DateEchance: "22/11/2021",
  },

  {
    Id: 2,
    Nom: "Eduardo Mendes",
    Email: "eduardo.mendes@gmail.com",
    Montant: 1920.155,
    DateEchance: "01/03/2021",
  },

  {
    Id: 3,
    Nom: "Eduardo Mendes",
    Email: "eduardo.mendes@gmail.com",
    Montant: 1562.15,
    DateEchance: "06/04/2021",
  },

  {
    Id: 4,
    Nom: "Eduardo Mendes",
    Email: "eduardo.mendes@gmail.com",
    Montant: 123.9,
    DateEchance: "26/09/2021",
  },

  {
    Id: 5,
    Nom: "Eduardo Mendes",
    Email: "eduardo.mendes@gmail.com",
    Montant: 1459.5,
    DateEchance: "21/01/2021",
  },
];

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Nom",
    accessor: "nom",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Montant",
    accessor: "montant",
  },
  {
    Header: "DateEchance",
    accessor: "dateEchance",
  },
];

export default function InvoiceList() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Invoice Creation" currentPage="Invoice list" />
        <Divider orientation="horizontal" />
        <Box>
          <Text fontWeight="bold" fontSize="24" margin="6" color="gray.900">
            Gestion des Factures
          </Text>
        </Box>

        <Card bg="white" marginTop="1">
          <CardHeader>
            <Heading size="md">Les reçus</Heading>
          </CardHeader>
          {Factures.map((factures) => (
            <CardBody key={factures.Id}>
              <Box border="1px solid" borderRadius="5" padding="2">
                <Text
                  fontWeight="bold"
                  fontSize="18"
                  marginTop="1"
                  color="gray.900"
                >
                  {" "}
                  {factures.Nom}{" "}
                </Text>
                <Text> Email : {factures.Email} </Text>
                <Text> Montant : {factures.Montant} $ </Text>
                <Text> {`Date d'échance : ${factures.DateEchance}`} </Text>
              </Box>
            </CardBody>
          ))}
        </Card>
      </Flex>
    </Flex>
  );
}
