import {Box, Card,Divider, Center, Flex, HStack, Icon, Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

const Virement = [

  { Id: 1, Montant: 24.51, TypeOfTransaction: 'Virement', ExecutionDate: '05/11/2022' },

  { Id: 2, Montant: 221.51, TypeOfTransaction: 'Paiement', ExecutionDate: '25/09/2022' },

  { Id: 3, Montant: 2423.51, TypeOfTransaction: 'Paiement', ExecutionDate: '15/03/2022' },

  { Id: 4, Montant: 512.51, TypeOfTransaction: 'Paiement', ExecutionDate: '15/03/2022' },

  { Id: 5, Montant: 512.51, TypeOfTransaction: 'Virement', ExecutionDate: '22/04/2022' }

]


const columns = [{  
  Header: 'Id',  
  accessor: 'id'  
 },{  
 Header: 'Montant',  
 accessor: 'montant'  
 },{  
  Header: 'TypeOfTransaction',  
  accessor: 'typeOfTransaction'  
},{  
  Header: 'ExecutionDate',  
  accessor: 'executionDate'  
}]  

export default function TransferHistory() {
  return (

    
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Dashboard" currentPage="Create a transfer" />
        <Divider orientation="horizontal" />
        <Box>
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.900" >
            Les Virement et les Paiements
          </Text>
        </Box>

        <Box bg='white' marginTop="6">
          <Text fontWeight="bold" fontSize="18" marginTop="1" color="gray.900" >
            Les reçus
          </Text>
        <Center>
        <Table>
            <Tr>
                <Th ><Text marginRight="6">ID</Text></Th>
                <Th ><Text marginRight="6">Montant</Text></Th>
                <Th ><Text marginRight="6">Type de Transaction </Text> </Th>
                <Th ><Text marginRight="6">Date d exécution</Text> </Th>
                <Th ><Text marginRight="6">Download</Text> </Th>
            </Tr>

            {Virement.map(virement => (
                <Tr>
                  <Td>{virement.Id}</Td>
                  { virement.TypeOfTransaction ==  "Virement" &&
                   <Td color="#db3e00" >{virement.Montant} $</Td>
                  }
                  { virement.TypeOfTransaction ==  "Paiement" &&
                   <Td color="#40bf80" >{virement.Montant} $</Td>
                  }
                   <Td>{virement.TypeOfTransaction}</Td>
                   <Td>{virement.ExecutionDate}</Td>
                   <a href="http://localhost:3000/invoice/" ><Td color="blue">Téléchargement</Td></a>
                </Tr>
                 ))}
        </Table>
        </Center>
        </Box>
      </Flex>
    </Flex>
  );
}
