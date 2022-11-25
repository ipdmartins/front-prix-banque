import { Box, Divider, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Beneficiary() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header
          previousPage="Create a transfer"
          currentPage="Beneficiary management"
        />
        <Divider orientation="horizontal" />
        <Box>
          <h1>Beneficiary page</h1>
        </Box>
      </Flex>
    </Flex>
  );
}
