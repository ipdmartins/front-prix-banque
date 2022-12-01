import { Box, Card, Center, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash,FaPlusCircle,FaArrowCircleDown,FaArrowCircleUp,FaFileAlt,FaCreditCard} from "react-icons/fa";
import { useEffect, useState } from "react";

interface userProps {
  account: String;
  address: String;
  email: String;
  id: String;
  name: String;
  password: String;
  phone: String;
}


export default function Dashboard() {
  const router = useRouter();
  const {
    query: { data },
  } = router;
  const [user, setUser] = useState(null);

  useEffect(() => {
   // const userData = JSON.parse(String(data));

    //setUser(userData);
  }, []);

  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={true} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Home" currentPage="Dashboard" />
       <Box textAlign="center">
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.900">
            Bienvenue dans votre Dashboard de gestion financière
          </Text>
        </Box>
        <Center marginTop="8">
          <HStack spacing="28">
            <Box>
              <Text marginLeft="2" fontSize="18" fontWeight="bold">
                Solde de compte 1 :
              </Text>
              <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2">
                <HStack spacing="2">
                  <Text fontSize="20">CAD 155.00</Text>
                  <Icon
                    as={FaEye}
                    fontSize="24"
                    color="grey.900"
                  />
                </HStack>
              </Card>
              
            </Box>
            <Box>
              <Text marginLeft="2" fontSize="18" fontWeight="bold">
              Solde de compte 2 :
              </Text>
              <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
              >
                <HStack spacing="8">
                <Text fontSize="20">CAD 49.00</Text>
                <Icon as={FaEye} fontSize="24" color="grey.900" />
                </HStack>
              </Card>             
            </Box>
          </HStack>
        </Center>
        <div style ={{ paddingLeft : `80px`,paddingRight : `80px`  }}>
        <Box style ={{ marginTop : `40px` }}>
          <HStack spacing="5" style ={{ marginBottom: `10px` }}>
          <Text marginLeft="1" fontSize="28" fontWeight="bold">
                Relevé de compte
                </Text>
                <Icon as={FaPlusCircle} fontSize="24" color="grey.900" />
          </HStack>
         
         
          <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
              >
                  <table>
                      <tr>
                        <th ></th>
                        <th >Nom</th>
                        <th >Date</th>
                        <th >Somme</th>
                      </tr>
                      <tr>
                        <td><Icon style={{ alignItems:"center"}} as={FaArrowCircleDown} fontSize="24" color="crimson" /></td>
                        <td><Text style={{ textAlign: 'center'}} fontSize="24" fontWeight="bold">Netflix</Text></td>
                        <td><Text style={{ textAlign: 'center'}} fontSize="17" color="darkgray">27 March 2020, at 12:30 PM</Text></td>
                        <td><Text style={{ textAlign: 'right'}} fontSize="17" color="crimson">-$2500</Text></td>
                      </tr>
                      <tr>
                       <td><Icon  style={{ alignItems: 'center'}} as={FaArrowCircleUp} fontSize="24" color="chartreuse" /></td>
                        <td><Text style={{ textAlign: 'center'}} fontSize="24" fontWeight="bold">Apple</Text></td>
                        <td><Text style={{ textAlign: 'center'}} fontSize="17" color="darkgray">27 March 2020, at 12:30 PM</Text></td>
                        <td><Text style={{ textAlign: 'right'}} fontSize="17" color="chartreuse">+2500</Text></td>
                      </tr>
                    </table>
              </Card>  

           
            </Box>
        </div>

        <div style ={{ paddingLeft : `80px`,paddingRight : `80px`  }}>
        <Box style ={{ marginTop : `40px` }}>
          <HStack spacing="5" style ={{ marginBottom: `10px` }}>
          <Text marginLeft="1" fontSize="28" fontWeight="bold">
                Virement
                </Text>
                <Icon as={FaPlusCircle} fontSize="24" color="grey.900" />
          </HStack>
         
         
          <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
              >
                  <table>
                      <tr>
                        <th >Nom</th>
                        <th style={{ textAlign: 'left'}} >Information </th>
                        <th style={{ textAlign: 'left'}} >Edit</th>
                      </tr>
                      <tr>
                        <td  style={{ textAlign: 'center',  fontSize : '28px', font : 'bold'}} >Oliver Liam</td>
                        <td>
                          <ul>
                            <li>Company Name : Viking Burrito</li>
                            <li>Email Adresse : oliver@burritoViking.com</li>
                            <li>VAT number : FRB12345679</li>
                          </ul>
                        </td>
                        <td> <Icon as={FaCreditCard} fontSize="24" color="grey.900" /> EDIT</td>
                      </tr>
                    </table>
              </Card>  

           
            </Box>
        </div>

        <div style ={{ paddingLeft : `80px`,paddingRight : `80px`  }}>
        <Box style ={{ marginTop : `40px` }}>
          <HStack spacing="5" style ={{ marginBottom: `10px` }}>
          <Text marginLeft="1" fontSize="28" fontWeight="bold">
                Facture
                </Text>
                <Icon as={FaPlusCircle} fontSize="24" color="grey.900" />
          </HStack>
         
         
          <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
              >
                  <table>
                      <tr>
                        <th >Date</th>
                        <th >Nom</th>
                        <th >Somme</th>
                        <th > </th>
                      </tr>
                      <tr>
                        <td><Text style={{ textAlign: 'center'}} fontSize="24" fontWeight="bold">March, 01, 2020</Text></td>
                        <td><Text style={{ textAlign: 'center'}} fontSize="17" color="darkgray">#MS-415646</Text></td>
                        <td><Text style={{ textAlign: 'center'}} fontSize="17" color="crimson">$180</Text></td>
                        <td><Icon style={{ alignItems:"right"}} as={FaFileAlt} fontSize="24" color="grey" /></td>
                      </tr>
                    </table>
              </Card>  

           
            </Box>
        </div>

      </Flex>
    </Flex>
    
  );
}
