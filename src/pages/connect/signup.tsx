import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

interface handleSubmitProps {
  nom: string;
  addresse: string;
  phone: string;
}

export default function SignUp() {
  const { register, handleSubmit } = useForm<handleSubmitProps>();

  function onSubmit(data: handleSubmitProps) {
    console.log(data);
  }

  return (
    <Box>
      <Center>
        <Text marginLeft="2" fontWeight="bold" fontSize="20" marginTop="8">
          Merci de votre intérêt.
        </Text>
      </Center>
      <Center>
        <Text marginLeft="2" fontWeight="bold" fontSize="16" marginTop="2">
          Veuillez remplir les détails ci-dessous pour créer votre compte.
        </Text>
      </Center>
      <Center>
        <Box
          borderColor="gray.900"
          border="1px"
          borderRadius={8}
          backgroundColor="blue.500"
          width="30%"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl textAlign="center" marginTop="2">
              <Box display="flex">
                <FormLabel fontSize="16">Nom:</FormLabel>
                <Input
                  background="gray.100"
                  borderRadius="8"
                  size="md"
                  width="40%"
                  borderColor="gray.900"
                  {...register("nom")}
                />
              </Box>
              <Box display="flex">
                <FormLabel fontSize="16">Addresse:</FormLabel>
                <Input
                  {...register("addresse")}
                  background="gray.100"
                  borderRadius="8"
                  size="md"
                  width="40%"
                  borderColor="gray.900"
                />
              </Box>
              <Box display="flex">
                <FormLabel fontSize="16">Téléphone:</FormLabel>
                <Input
                  {...register("phone")}
                  background="gray.100"
                  borderRadius="8"
                  size="md"
                  width="40%"
                  borderColor="gray.900"
                />
              </Box>
              <Box textAlign="right" marginRight="6">
                <Button
                  marginTop="4"
                  size="sm"
                  background="gray.100"
                  borderColor="gray.900"
                  variant="outline"
                  type="submit"
                >
                  Confirmer
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Center>
    </Box>
  );
}
//https://chakra-ui.com/docs/components/image/props
//https://react-icons.github.io/react-icons/search?q=card
//https://apexcharts.com/vue-chart-demos/treemap-charts/basic/
