import { Box, Button, Icon, Input, Link, Text } from "@chakra-ui/react";
import { RiLoginCircleLine } from "react-icons/ri";

export function Signin() {
  return (
    <Box>
      <Box marginTop="8" marginLeft="6">
        <Link display="flex">
          <Icon as={RiLoginCircleLine} fontSize="28" />
          <Text marginLeft="2" fontWeight="bold" fontSize="20">
            Sign In
          </Text>
        </Link>
      </Box>
      <Box marginTop="4" marginLeft="6">
        <Text fontSize="16">Numéro de Compte</Text>
        <Input
          background="gray.100"
          borderRadius="8"
          size="md"
          width="90%"
          borderColor="gray.900"
        />
      </Box>
      <Box marginTop="4" marginLeft="6">
        <Text fontSize="16">Mot de passe</Text>
        <Input
          background="gray.100"
          borderRadius="8"
          size="md"
          width="90%"
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
        >
          Ok
        </Button>
      </Box>
    </Box>
  );
}
