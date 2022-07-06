import { Box, Heading, VStack } from "@chakra-ui/layout";
import {
  Button,
  FormLabel,
  Input,
  HStack,
  Link,
  Text,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { customersregister, isLogged } = useContext(AuthContext);
  // const { securityregister, isLogged } = useContext(AuthContext);
  
  const {  adminregister, isLogged } = useContext(AuthContext);
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, []);
  const onClick = async () => {
    adminregister(email, phonenumber, password, name);
    // securityregisteremail, phonenumber, password, name);
    // adminregister(email, phonenumber, password, name);
  };
  return (
    <Box
      w={["full", "md"]}
      p={["8", "10"]}
      mt={["20", "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <Center>
        <Avatar src="https://bit.ly/broken-link" />
      </Center>
      <VStack spacing={7} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading fontSize="20px">Register</Heading>
        </VStack>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>phone number</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="Phone Number"
            value={phonenumber}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </FormControl>
        <Button
          rounded="none"
          colorScheme="facebook"
          color="#E7ECEF"
          w="full"
          onClick={onClick}
        >
          Register
        </Button>
        <HStack fontSize="22px">
          <Text color="#274C77">Already have an account?</Text>
          <Link color="#274C77" href="/login">
            Login
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}