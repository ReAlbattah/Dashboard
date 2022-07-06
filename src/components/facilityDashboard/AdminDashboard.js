// import "../Dashboard/dashboard.css";
//  import {Flex, Box,Heading, Link, Menu, MenuButton,Text, TableContainer, Table, Thead, Th, Tbody, Tr, Td, Switch, Divider,Avatar, MenuGroup} from "@chakra-ui/react";
// import reservation from './reservation.png'
// import group from './group.png'
// import { useContext, useEffect } from "react";
// import UsersContext from "../../context/UsersContext";
// import { useNavigate } from "react-router-dom";
// import ReservationsContext from "../../context/ReservationsContext";
// import TableItem from "../TableItem";
//  const AdminDashboard = () => {

  
//   // const {users,getUsers} = useContext(UsersContext)
//   const {reservations,getReservations} = useContext(ReservationsContext)
//   const navigate = useNavigate();
  

//   useEffect(()=>{
//     // getUsers();
//     getReservations();

//   },[])

//    return (
//       <>
//    <div class="container">
//   <nav></nav>
  
//   <div id="sidebar">

//   <Avatar m="5"> </Avatar> 
//     <Divider/>

//   <Flex 
   
//    flexDir="column"
//    w="100px"
//    mt="20"
//   alignItems="flex-start"
  
//    >
//    <Menu placement="right" >
//        <Link 
//        borderRadius={6}
//        _hover={{textDecoration:'underline'}}
//        w="120%"
//    >
//        <MenuButton w="100%" >
//            <Flex >
//            <Text mt="4"  padding={2} fontSize='xl' color="white">Dashboard</Text>
//            </Flex>
//        </MenuButton>
//        </Link>

//        <Link href="/facility/reservation"
//        borderRadius={6}
//        _hover={{textDecoration:'underline'}}
//        w="120%"
//    >
//        <MenuButton w="100%" >
//            <Flex >
//            <Text mt="4"  padding={2} fontSize='xl' color="white">Reservations</Text>
//            </Flex>
//        </MenuButton>
//        </Link>

//        <Link href="/facility/park"
//        borderRadius={6}
//        _hover={{textDecoration:'underline'}}
//        w="120%"
//    >
//        <MenuButton w="100%" >
//            <Flex >
//            <Text mt="4"  padding={2} fontSize='xl' color="white">Park</Text>
//            </Flex>
//        </MenuButton>
//        </Link>
//    </Menu>


//    </Flex>

//   </div>
//   <div id="content1">
    
//   <Box
//     boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
//     h="90%"   bg='#E7ECEF' align="center" >
      
//       <img src={group} alt="group"  />
//     <Heading as='h4' size='md' textAlign="center" mt="1"  >
//    Park
   
//   </Heading>
//   <Text fontSize='4xl' >  </Text> 
//   </Box>


//   </div>
//   <div id="content2" >
    
//   <Box 
//     boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
//     h="90%"   bg='#E7ECEF' align="center">
  
//   <img src={reservation} alt="reservation" />

//   <Heading as='h4' size='md' textAlign="center" mt="1" >
//   Reservations
   
//   </Heading>
//   <Text fontSize='4xl' >{reservations.length}</Text>

//   </Box>

//   </div>


//   <main>

//   <Heading as='h3' size='md' textAlign="start" m="2">
//   Users
   
//   </Heading>

// <TableContainer>
//   <Table variant='striped' colorScheme='blue'>

// <Thead>
//   <Tr>
//   <Th> Name </Th>
//   <Th> Email </Th>
//   <Th> Phone Number </Th>
//   </Tr>
// </Thead>



// {/* <Tbody>
//   {users.map((user)=>(

//   <TableItem
//   name={user.myUser.name}
//   email={user.myUser.email}
//   phoneNumber={user.myUser.phoneNumber}
  
//   />

//  ))}
  
// </Tbody> */}

//   </Table>
// </TableContainer>
//   </main>


// </div>
//       </>
//       )
//  };
 
//  export default AdminDashboard;
 
