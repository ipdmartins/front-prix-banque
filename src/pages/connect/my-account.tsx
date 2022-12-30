import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  TagLabel,
  Text,
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

export default function MyAccount() {
  const { register, handleSubmit } = useForm<handleSubmitProps>();

  async function onSubmit({
    name,
    address,
    phone,
    email,
    password,
  }: handleSubmitProps) {}

  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Dashboard" currentPage="My account" />
        <Divider orientation="horizontal" />
        <Box marginTop="6" textAlign="center">
          <Avatar size="xl" name="Jessica Michellin" />
          <Text marginTop="2" fontSize="22" color="gray.100" fontWeight="bold">
            Jessica Michellin
          </Text>
        </Box>
        <Center marginTop="6">
          <Box
            borderColor="gray.900"
            border="1px"
            borderRadius={8}
            backgroundColor="gray.100"
            width="55%"
            padding="4"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl marginTop="2">
                <Flex>
                  <FormLabel marginTop="1" fontSize="18" color="gray.900">
                    Account number:
                  </FormLabel>
                  <Spacer />
                  <Input
                    background="gray.700"
                    borderColor="gray.900"
                    borderRadius="8"
                    size="sm"
                    width="70%"
                    color="gray.100"
                    disabled
                    value="234242sf"
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
                    borderColor="gray.900"
                    borderRadius="8"
                    size="sm"
                    width="70%"
                    color="gray.100"
                    value="434 ABC St"
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
                    borderColor="gray.900"
                    borderRadius="8"
                    size="sm"
                    width="70%"
                    color="gray.100"
                    value="478 333 8844"
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
                    borderColor="gray.900"
                    borderRadius="8"
                    size="sm"
                    width="70%"
                    color="gray.100"
                    value="jessica@protonmail.com"
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
                    borderColor="gray.900"
                    borderRadius="8"
                    size="sm"
                    width="70%"
                    color="gray.100"
                    value="*****"
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
                    Update
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
}
