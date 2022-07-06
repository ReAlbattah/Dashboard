import {Flex, Box,Heading, Link, Menu, MenuButton,Text, TableContainer, Table, Thead, Th, Tbody, Tr, Td, Switch, IconButton, Avatar, Divider} from "@chakra-ui/react";
import {DeleteIcon} from '@chakra-ui/icons'
import group from './group.png' 
import facility from './facility.png'
import { useContext, useEffect } from "react";
import UsersContext from "../../context/UsersContext";
import TableItem from "../TableItem";
import { useNavigate } from "react-router-dom";
import FacilitiesContext from "../../context/FacilitiesContext";

const Users = () => {

  const {users,getUsers} = useContext(UsersContext)
  const {facilities,getFacilities} = useContext(FacilitiesContext)
  const navigate = useNavigate();
  

  useEffect(()=>{
    getUsers();
    getFacilities();

  },[])
  return (
    <>
    <div class="container">
   <nav></nav>
   
   <div id="sidebar">

   <Avatar m="5"> </Avatar> 
    <Divider/>

   <Flex 
    
    flexDir="column"
    w="100px"
    mt="20"
   alignItems="flex-start"
   
    >
    <Menu placement="right" >
        <Link href="/"
        borderRadius={6}
        _hover={{textDecoration:'underline'}}
        w="120%"
    >
        <MenuButton w="100%" >
            <Flex >
            <Text mt="4"  padding={2} fontSize='xl' color="white">Dashboard</Text>
            </Flex>
        </MenuButton>
        </Link>
 
        <Link 
        borderRadius={6}
        _hover={{textDecoration:'underline'}}
        w="120%"
    >
        <MenuButton w="100%" >
            <Flex >
            <Text mt="4"  padding={2} fontSize='xl' color="white">Users</Text>
            </Flex>
        </MenuButton>
        </Link>
 
        <Link href="/facilities"
        borderRadius={6}
        _hover={{textDecoration:'underline'}}
        w="120%"
    >
        <MenuButton w="100%" >
            <Flex >
            <Text mt="4"  padding={2} fontSize='xl' color="white">Facilities</Text>
            </Flex>
        </MenuButton>
        </Link>
    </Menu>
 
 
    </Flex>
 
   </div>
   <div id="content1">
     
   <Box 
     boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
     h="90%"   bg='#E7ECEF' align='center'>
   
   <img src={group} alt="group" />

   <Heading as='h4' size='md' textAlign="center"mt="1"  >
    Users
    
   </Heading>
     
   <Text fontSize='4xl' >{users.length}</Text>

   </Box>
 
 
   </div>
   <div id="content2">
     
   <Box 
     boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
     h="90%"   bg='#E7ECEF' align='center'>
   
   
   <img src={facility} alt="group" />

   <Heading as='h4' size='md' textAlign="center" mt="1"  >
   Facilities
    
   </Heading>
     
   <Text fontSize='4xl' >{facilities.length}</Text>

   </Box>
 
   </div>
 
 
   <main>
 
   <Heading as='h3' size='md' textAlign="start" m="2">
   Users
    
   </Heading>
 
 <TableContainer>
   <Table variant='simple' colorScheme='blue'>
 
 <Thead>
   <Tr>
   <Th> Name </Th>
   <Th> Email </Th>
   <Th> Phone Number </Th>
   <Th> Remove </Th>
   </Tr>
 </Thead>
 
 <Tbody>
  {users.map((user)=>(

  <TableItem 
  name={user.myUser.name}
  email={user.myUser.email}
  phoneNumber={user.myUser.phoneNumber}
  
  />

 ))}

 
 </Tbody>
   </Table>
 </TableContainer>
   </main>
 
 
 </div>
       </>

  )
};

export default Users;
