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
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Beneficiary() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function createBeneficiary() {}

  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header
          previousPage="Create a transfer"
          currentPage="Beneficiary management"
        />
        <Divider orientation="horizontal" />
        <Box>
          <Text marginLeft="4" fontWeight="bold" fontSize="2xl">
            Les bénéficiaires
          </Text>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>enregistrer un bénéficiaire</ModalHeader>
          <form onSubmit={createBeneficiary}>
            <ModalBody>
              <Text fontSize="16" justifyContent="center">
                {`Nous envoyons.`}
              </Text>
              <Center marginTop="4">
                {/* <Input
                  width="50%"
                  border="1px"
                  borderColor="gray.900"
                  placeholder="Entrez le code ici"
                  {...register("emailCode")}
                /> */}
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
    </Flex>
  );
}
