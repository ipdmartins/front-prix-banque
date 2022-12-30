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
        <Box marginLeft={8}>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.100">
            Invoice management
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
          {Factures.map((factures) => (
            <Box
              border="1px solid"
              key={factures.Id}
              margin={4}
              padding={3}
              borderRadius={10}
              background="gray.700"
            >
              <Text fontWeight="bold" fontSize="18" color="gray.100">
                {factures.Nom}
              </Text>
              <Text>E-mail: {factures.Email} </Text>
              <Text>Amount: CAD {factures.Montant}</Text>
              <Text> {`Due date: ${factures.DateEchance}`} </Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
}
