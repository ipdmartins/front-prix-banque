import {
  Box,
  Card,
  Divider,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function InvoiceList() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Invoice Creation" currentPage="Invoice list" />
        <Divider orientation="horizontal" />
        <Box>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.900">
            Facture
          </Text>
        </Box>

        <Box bg="white" marginTop="6">
          <Text fontWeight="bold" fontSize="18" margin="1" color="gray.900">
            Génération des factures
          </Text>
          <Center>
            <form>
              <HStack spacing="2">
                <Input
                  type="text"
                  size="md"
                  name="name"
                  placeholder="Donnés Destinataire"
                />
                <Input
                  type="text"
                  size="md"
                  name="dollars"
                  placeholder="0.00$"
                />
                <Input
                  type="text"
                  size="md"
                  name="name"
                  placeholder="Échéances (JJ/MM/AAAA)"
                />
              </HStack>
              <Input
                margin="6"
                width="auto"
                float="right"
                type="submit"
                color="white"
                bg="blue.700"
                value="ENVOYER"
              />
            </form>
          </Center>
        </Box>

        <Box bg="white" marginTop="6">
          <form>
            <NextLink href="/invoice/invoices-list">
              <Button
                margin="6"
                width="auto"
                float="left"
                type="submit"
                color="white"
                bg="blue.700"
              >
                GERER FACTURE
              </Button>
            </NextLink>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
