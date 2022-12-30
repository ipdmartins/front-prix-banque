import {
  Box,
  Divider,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  Text,
  ModalFooter,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
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

export default function Beneficiary() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<handleSubmitProps>();

  const Recipients = [
    {
      Id: 1,
      name: "John Scott",
      transferMethod: "john.scott@protonmail.com",
    },
    {
      Id: 2,
      name: "Maria Tomphsoms",
      transferMethod: "4936874488",
    },

    {
      Id: 3,
      name: "Jessica Spencer",
      transferMethod: "spencerj@protonmail.com",
    },
  ];

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

  async function createBeneficiary() {}

  return (
    <Flex direction="row" height="100vh" paddingBottom={8}>
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header
          previousPage="Create a transfer"
          currentPage="Beneficiary management"
        />
        <Divider orientation="horizontal" />
        <Box marginLeft={8}>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.100">
            Beneficiaries
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
            Create a recipient
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="4">
              <HStack spacing="2">
                <Input
                  type="text"
                  width="58%"
                  borderColor="gray.800"
                  size="lg"
                  name="name"
                  placeholder="Name of recipient"
                />
                <Input
                  type="text"
                  width="38%"
                  borderColor="gray.800"
                  size="lg"
                  name="KeyTransfer"
                  placeholder="Transfer method"
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
                Save
              </Button>
            </FormControl>
          </form>
        </Box>
        <Box background="gray.100" margin={6} borderRadius={8}>
          <Text
            fontWeight="bold"
            fontSize="18"
            color="gray.900"
            marginTop={4}
            marginLeft={4}
          >
            List of recipients
          </Text>
          {Recipients.map((receips) => (
            <Box
              border="1px solid"
              key={receips.Id}
              margin={4}
              padding={3}
              borderRadius={10}
              background="gray.700"
            >
              <Text> {`Name: ${receips.name}`} </Text>
              <Text> {`Transfer method: ${receips.transferMethod}`} </Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
}
