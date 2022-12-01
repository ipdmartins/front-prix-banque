import { Box, Divider, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function InvoiceCreation() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Dashboard" currentPage="Create an invoice" />
        <Divider orientation="horizontal" />
        <Box>
          <h1>Invoice creation page</h1>
        </Box>
      </Flex>
    </Flex>
  );
}
