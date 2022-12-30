import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";
import NextLink from "next/link";
import { api } from "../../libs/axios";
import { useState } from "react";
import { toastify } from "../../libs/toastify";
import { randomInt } from "crypto";

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

export default function SignUp() {
  const router = useRouter();
  const {
    query: { previousPage, currentPage },
  } = router;
  const { register, handleSubmit } = useForm<handleSubmitProps>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    emailCode: "",
    password: "",
    account: "",
  });

  async function onSubmit({
    name,
    address,
    phone,
    email,
    password,
  }: handleSubmitProps) {
    const account = Math.floor(Math.random() * 1000);
    const resp = await api.post("clients", {
      name,
      address,
      phone,
      email,
      password,
      account: `00${account}`,
      emailCode: Math.floor(Math.random() * 10000),
      createdAt: new Date(),
    });

    setUser(resp.data);
    onOpen();
  }

  async function checkEmailCode({ emailCode }: handleSubmitProps) {
    const response = await api.get(`clients?email=${user.email}`);

    if (emailCode == response.data[0].emailCode) {
      toastify({
        type: "success",
        message: "Enregistrement créé. Vous pouvez vous connecter",
      });
      onClose();
      router.push("/");
    } else {
      toastify({
        type: "error",
        message: "Le code ne correspond pas",
      });
    }
  }

  return (
    <Box>
      <Box
        as="header"
        backgroundColor="gray.600"
        textAlign="center"
        paddingTop="6"
        paddingBottom="6"
      >
        <Text fontWeight="bold" fontSize="28" color="gray.900">
          New Bank
        </Text>
      </Box>
      <HStack p="4" spacing="2">
        <NextLink href="/">{previousPage}</NextLink>
        <Icon as={RiArrowRightSLine} fontSize="20" />
        <Text fontSize="14">{currentPage}</Text>
      </HStack>
      <Center>
        <Text marginLeft="2" fontWeight="bold" fontSize="20" marginTop="8">
          Thank you for your interest.
        </Text>
      </Center>
      <Center>
        <Text marginLeft="2" fontWeight="bold" fontSize="16" marginTop="2">
          Fill in the fields below to create your new account.
        </Text>
      </Center>
      <Center marginTop="6">
        <Box
          borderColor="gray.900"
          border="1px"
          borderRadius={8}
          backgroundColor="gray.100"
          width="50%"
          padding="4"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl marginTop="2">
              <Flex>
                <FormLabel marginTop="1" fontSize="18" color="gray.900">
                  Name:
                </FormLabel>
                <Spacer />
                <Input
                  background="gray.700"
                  borderColor="gray.100"
                  borderRadius="8"
                  size="sm"
                  width="70%"
                  {...register("name")}
                />
              </Flex>
              <Flex>
                <FormLabel marginTop="1" fontSize="18" color="gray.900">
                  Address:
                </FormLabel>
                <Spacer />
                <Input
                  background="gray.700"
                  borderColor="gray.100"
                  borderRadius="8"
                  size="sm"
                  width="70%"
                  {...register("address")}
                />
              </Flex>
              <Flex>
                <FormLabel marginTop="1" fontSize="18" color="gray.900">
                  Phone:
                </FormLabel>
                <Spacer />
                <Input
                  background="gray.700"
                  borderColor="gray.100"
                  borderRadius="8"
                  size="sm"
                  width="70%"
                  {...register("phone")}
                />
              </Flex>
              <Flex>
                <FormLabel marginTop="1" fontSize="18" color="gray.900">
                  E-mail:
                </FormLabel>
                <Spacer />
                <Input
                  type="email"
                  background="gray.700"
                  borderColor="gray.100"
                  borderRadius="8"
                  size="sm"
                  width="70%"
                  {...register("email")}
                />
              </Flex>
              <Flex>
                <FormLabel marginTop="1" fontSize="18" color="gray.900">
                  {`Repeat your e-mail:`}
                </FormLabel>
                <Spacer />
                <Input
                  type="email"
                  background="gray.700"
                  borderColor="gray.100"
                  borderRadius="8"
                  size="sm"
                  width="70%"
                  {...register("email")}
                />
              </Flex>
              <Flex>
                <FormLabel marginTop="1" fontSize="18" color="gray.900">
                  Password:
                </FormLabel>
                <Spacer />
                <Input
                  type="password"
                  background="gray.700"
                  borderColor="gray.100"
                  borderRadius="8"
                  size="sm"
                  width="70%"
                  {...register("password")}
                />
              </Flex>
              <Box textAlign="right" marginRight="1">
                <Button
                  marginTop="2"
                  size="sm"
                  background="green"
                  borderColor="gray.900"
                  variant="outline"
                  type="submit"
                >
                  Create
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Votre inscription a été générée</ModalHeader>
          <form onSubmit={handleSubmit(checkEmailCode)}>
            <ModalBody>
              <Text fontSize="16" justifyContent="center">
                {`Nous envoyons un code numérique à
              l'adresse e-mail que vous avez fournie. Veuillez vérifier le code et
              le saisir ci-dessous.`}
              </Text>
              <Center marginTop="4">
                <Input
                  width="50%"
                  border="1px"
                  borderColor="gray.900"
                  placeholder="Entrez le code ici"
                  {...register("emailCode")}
                />
              </Center>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" background="green" color="white">
                Confirmer
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
//https://chakra-ui.com/docs/components/image/props
//https://react-icons.github.io/react-icons/search?q=card
//https://apexcharts.com/vue-chart-demos/treemap-charts/basic/
