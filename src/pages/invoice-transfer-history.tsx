import { Box, Divider, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function InvoiceTransferHistory() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header
          previousPage="Dashboard"
          currentPage="Invoice and Transfers History"
        />
        <Divider orientation="horizontal" />
        <Box>
          <h1>Invoice and Transfers History page</h1>
        </Box>
      </Flex>
    </Flex>
  );
}
