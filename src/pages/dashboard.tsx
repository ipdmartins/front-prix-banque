import { Box, Divider, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useRouter } from "next/router";
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
    const userData = JSON.parse(String(data));

    setUser(userData);
  }, []);

  return (
    <Flex direction="row" height="100vh" marginBottom="2">
      <Sidebar login={user ? true : false} />
      <Flex width="100%" maxWidth={1480} direction="column">
        <Header previousPage="Home" currentPage="Dashboard" />
        <Divider orientation="horizontal" />
        <Box>
          <h1>Dashboard page</h1>
        </Box>
      </Flex>
    </Flex>
  );
}
