import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface handleSubmitProps {
  name: string;
  address: string;
  phone: string;
  email: string;
  emailCode: string;
  password: string;
  account: string;
  createdAt: Date;
}

export default function InvoiceList() {
  const { register, handleSubmit } = useForm<handleSubmitProps>();

  async function onSubmit({
    name,
    address,
    phone,
    email,
    password,
  }: handleSubmitProps) {
    // const account = Math.floor(Math.random() * 1000);
    // const resp = await api.post("clients", {
    //   name,
    //   address,
    //   phone,
    //   email,
    //   password,
    //   account: `00${account}`,
    //   emailCode: Math.floor(Math.random() * 10000),
    //   createdAt: new Date(),
    // });
    // setUser(resp.data);
    // onOpen();
  }

  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Invoice Creation" currentPage="Invoice list" />
        <Divider orientation="horizontal" />
        <Box marginLeft={8}>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.100">
            Invoice
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
            Generate invoice
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="4">
              <HStack spacing="2">
                <Input
                  type="text"
                  width="50%"
                  borderColor="gray.800"
                  size="lg"
                  name="name"
                  placeholder="Donnés Destinataire"
                />
                <Input
                  type="text"
                  size="lg"
                  width="20%"
                  borderColor="gray.800"
                  name="dollars"
                  placeholder="0.00$"
                />
                <Input
                  type="date"
                  size="lg"
                  width="25%"
                  borderColor="gray.800"
                  name="name"
                  placeholder="Échéances (JJ/MM/AAAA)"
                />
              </HStack>
              <Button
                marginTop={4}
                type="submit"
                float="right"
                marginRight={8}
                marginBottom={4}
                width="auto"
                background="green"
                borderColor="gray.800"
              >
                Send
              </Button>
            </FormControl>
          </form>
        </Box>
        <NextLink href="/invoice/invoices-list">
          <Button
            margin="6"
            width="auto"
            float="left"
            color="white"
            bg="blue.900"
          >
            GERER FACTURE
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
}
