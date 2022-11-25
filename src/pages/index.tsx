import { Box, Divider, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Box>
          <h1>Public Home page</h1>
        </Box>
      </Flex>
    </Flex>
  );
}
