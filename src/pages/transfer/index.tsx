import {
  Box,
  Center,
  Divider,
  Flex,
  Input,
  HStack,
  Select,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function TransferCreation() {
  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Dashboard" currentPage="Create a transfer" />
        <Divider orientation="horizontal" />
        <Box marginLeft={8}>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.100">
            Payment
          </Text>
        </Box>
        <Center textAlign="center">
          <Box
            background="white"
            border="1px"
            borderColor="gray.200"
            borderRadius="10"
            marginTop="16"
            width="60vw"
            height="40vh"
            padding="6"
          >
            <HStack display="flex">
              <Select
                placeholder="Sélectionnez le bénéficiaire"
                border="1px"
                borderColor="gray.400"
                borderRadius="8"
                width="60%"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Spacer />
              <Input
                placeholder="$ 0.00"
                width="25%"
                border="1px"
                borderColor="gray.400"
                borderRadius="8"
              />
            </HStack>
            <Input
              placeholder="Écrire une question de confirmation du virement"
              marginTop="4"
              border="1px"
              borderColor="gray.400"
              borderRadius="8"
            />
            <Input
              placeholder="Rédigez une réponse de confirmation du virement"
              marginTop="4"
              border="1px"
              borderColor="gray.400"
              borderRadius="8"
            />
            <Box textAlign="right">
              <Button marginTop="4" background="green" color="white">
                Confirm
              </Button>
            </Box>
            <Box textAlign="left">
              <Button
                marginTop="10"
                background="blue.700"
                color="white"
                size="sm"
              >
                Beneficiary management
              </Button>
            </Box>
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
}
