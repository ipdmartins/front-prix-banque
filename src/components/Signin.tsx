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

interface handleSubmitProps {
  compte: string;
  password: string;
}
export function Signin() {
  const { register, handleSubmit } = useForm<handleSubmitProps>();

  function onSubmit(data: handleSubmitProps) {
    console.log(data);
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
            Numéro de Compte
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
            Mot de passe
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
