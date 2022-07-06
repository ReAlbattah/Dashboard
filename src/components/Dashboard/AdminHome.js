
 import React, { useContext, useEffect } from "react";
 import "./dashboard.css";
 import {Flex, Box,Heading, Link, Menu, MenuButton,Text, TableContainer, Table, Thead, Th, Tbody, Tr, Td, Switch, Divider,Avatar, MenuGroup} from "@chakra-ui/react";

import group from './group.png' 
import facility from './facility.png'
import UsersContext from "../../context/UsersContext";
import FacilitiesContext from "../../context/FacilitiesContext";
import PendingContext from "../../context/PendingContext";
import PendingItem from "../PendingItem";

 const AdminHome = () => {
  const {users,getUsers} = useContext(UsersContext)
  const {facilities,getFacilities} = useContext(FacilitiesContext)
  const {pending,getApprove} = useContext(PendingContext)

  useEffect(()=>{
    getUsers();
    getFacilities();
    getApprove();

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
       <Link 
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

       <Link href="/users"
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
    h="90%"   bg='#E7ECEF' align="center" >
      
      <img src={group} alt="group"  />
    <Heading as='h4' size='md' textAlign="center" mt="1"  >
   Users
   
  </Heading>
  <Text fontSize='4xl' >{users.length}</Text>
  </Box>


  </div>
  <div id="content2">
    
  <Box 
    boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
    h="90%"   bg='#E7ECEF' align="center">
  
  <img src={facility} alt="facility" />

  <Heading as='h4' size='md' textAlign="center" mt="1" >
  Facilities
   
  </Heading>
  <Text fontSize='4xl' >{facilities.length}</Text>

  </Box>

  </div>


  <main>

  <Heading as='h3' size='md' textAlign="start" m="2">
  Pending Request
   
  </Heading>

<TableContainer>
  <Table variant='striped' colorScheme='blue'>

<Thead>
  <Tr>
  <Th> Facility Name </Th>
  <Th> Facility Adress </Th>
  <Th> Approved </Th>
  </Tr>
</Thead>

{/* 
<Tbody>
  {pending.map((user)=>(

  <PendingItem
  name={user.name}
  address={user.address}
  approve={e=>getApprove(e.target)}
  
  />

 ))}

 
 </Tbody> */}

  </Table>
</TableContainer>
  </main>


</div>
      </>
      )
 };
 
 export default AdminHome;
 

