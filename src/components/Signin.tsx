import {
  Box,
  Button,
  Icon,
  Input,
  Text,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { RiLoginCircleLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { api } from "../libs/axios";
import { toastify } from "../libs/toastify";
import { useRouter } from "next/router";

interface handleSubmitProps {
  compte: string;
  password: string;
}

export function Signin() {
  const { register, handleSubmit } = useForm<handleSubmitProps>();
  const router = useRouter();

  async function onSubmit({ compte, password }: handleSubmitProps) {
    const response = await api.get(
      `clients?account=${compte}&password=${password}`
    );

    if (response.data !== null && response.data.length === 1) {
      const user = {
        account: String(response.data[0].account),
        address: String(response.data[0].address),
        email: String(response.data[0].email),
        id: String(response.data[0].id),
        name: String(response.data[0].name),
        password: String(response.data[0].password),
        phone: String(response.data[0].phone),
      };

      router.push({
        pathname: `/dashboard`,
        query: { data: JSON.stringify(user) },
      });
    } else {
      toastify({
        type: "error",
        message: "E-mail ou mot de passe introuvable",
      });
    }
  }

  return (
    <Box>
      <HStack marginTop="8" marginLeft="6">
        <Icon as={RiLoginCircleLine} fontSize="28" />
        <Text marginLeft="2" fontWeight="bold" fontSize="20">
          Sign In
        </Text>
      </HStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl textAlign="center" marginTop="2" isRequired>
          <FormLabel fontSize="16" marginLeft="6" marginBottom="0">
            Account number
          </FormLabel>
          <Input
            background="gray.100"
            borderRadius="8"
            size="md"
            width="80%"
            borderColor="gray.900"
            marginBottom="4"
            {...register("compte")}
          />
          <FormLabel fontSize="16" marginLeft="6" marginBottom="0">
            Password
          </FormLabel>
          <Input
            type="password"
            {...register("password")}
            background="gray.100"
            borderRadius="8"
            size="md"
            width="80%"
            borderColor="gray.900"
          />
          <Box textAlign="right" marginRight="6">
            <Button
              marginTop="4"
              size="sm"
              background="gray.100"
              borderColor="gray.900"
              variant="outline"
              type="submit"
            >
              Ok
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
}
