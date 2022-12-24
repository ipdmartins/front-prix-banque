import { Box, Card, Center, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import Image from "next/image";
import CardImg from "../assets/card.png";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const options = {
  chart: {
    background: "#a4a9b0",
    zoom: {
      enable: false,
    },
    foreColor: "#323238",
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: "#323238",
    },
    axisTicks: {
      color: "#323238",
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
      "2021-03-25T00:00:00.000Z",
      "2021-03-26T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityForm: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [{ name: "series1", data: [31, 70, 120, 90, 65, 97, 102, 110] }];

export default function Home() {
  return (
    <Flex direction="row" height="100%" marginBottom="1">
      <Sidebar login={false} />
      <Flex width="100%" maxWidth={1480} direction="column" marginBottom="4">
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="24" marginTop="6" color="gray.1 00">
            Welcome to your financial management appl
          </Text>
        </Box>
        <Center marginTop="8">
          <HStack spacing="28">
            <Box>
              <Text marginLeft="2" fontSize="18" fontWeight="bold">
                Échanger
              </Text>
              <Card
                variant="outline"
                border="1px"
                borderRadius="10"
                borderColor="gray.200"
                backgroundColor="white"
                padding="2"
              >
                <HStack spacing="2">
                  <Text fontSize="20">USD 1</Text>
                  <Icon as={RiArrowRightLine} />
                  <Text fontSize="20">CAD 1.35</Text>
                  <Icon
                    as={RiMoneyDollarCircleLine}
                    fontSize="28"
                    color="blue.900"
                  />
                </HStack>
              </Card>
            </Box>
            <Box>
              <Text marginLeft="2" fontSize="18" fontWeight="bold">
                Toronto stock exchange
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
                  <Text fontSize="18">Valeur: 18.884 pts</Text>
                  <Icon as={BsGraphUp} fontSize="24" color="blue.900" />
                </HStack>
              </Card>
            </Box>
          </HStack>
        </Center>
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize="18"
          marginTop="8"
          color="gray.900"
        >
          Sachez où investir pour assurer votre avenir
        </Text>
        <Center marginTop="2">
          <Chart
            options={options}
            series={series}
            type="area"
            width={800}
            height={200}
          />
        </Center>
        <Center marginTop="6">
          <HStack>
            <Box maxWidth={500}>
              <Text fontSize="20" fontWeight="bold">
                Demandez votre carte de crédit
              </Text>
              <Text fontSize="18">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                iste omnis blanditiis obcaecati, facilis nulla exercitationem
                harum animi reiciendis eos, molestias eum pariatur.
              </Text>
            </Box>
            <Box>
              <Image src={CardImg} width={300} height={150} alt="" />
            </Box>
          </HStack>
        </Center>
      </Flex>
    </Flex>
  );
}
