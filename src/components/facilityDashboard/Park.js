import "../Dashboard/dashboard.css";
 import {Flex, Box,Heading, Link, Menu, MenuButton,Text, TableContainer, Table, Thead, Th, Tbody, Tr, Td, Switch, Divider,Avatar, MenuGroup, Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Input} from "@chakra-ui/react";
import reservation from './reservation.png'
import group from './group.png'
import { AddIcon } from '@chakra-ui/icons'
import { useContext, useEffect } from "react";
import ParkContext from "../../context/ParkContext";
// import ParkItem from "../Pending";

 const Park = () => {

  const [parks,getParks] = useContext(ParkContext);

  console.log(parks);
  
  useEffect(()=>{
    getParks();

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
       {/* <Link href="/facility"
       borderRadius={6}
       _hover={{textDecoration:'underline'}}
       w="120%"
   >
       <MenuButton w="100%" >
           <Flex >
           <Text mt="4"  padding={2} fontSize='xl' color="white">Dashboard</Text>
           </Flex>
       </MenuButton>
       </Link> */}

       <Link 
       borderRadius={6}
       _hover={{textDecoration:'underline'}}
       w="120%"
   >
       <MenuButton w="100%" >
           <Flex >
           <Text mt="4"  padding={2} fontSize='xl' color="white">Reservations</Text>
           </Flex>
       </MenuButton>
       </Link>

       <Link href="/facility/park"
       borderRadius={6}
       _hover={{textDecoration:'underline'}}
       w="120%"
   >
       <MenuButton w="100%" >
           <Flex >
           <Text mt="4"  padding={2} fontSize='xl' color="white">Park</Text>
           </Flex>
       </MenuButton>
       </Link>
   </Menu>


   </Flex>

  </div>
  {/* <div id="content1">
    
  <Box
    boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
    h="90%"   bg='#E7ECEF' align="center" >
      
      <img src={group} alt="group"  />
    <Heading as='h4' size='md' textAlign="center" mt="1"  >
   Users
   
  </Heading>
  <Text fontSize='4xl' >100</Text>
  </Box>


  </div>
  

 


  <div id="content2">
    
  <Box 
    boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
    h="90%"   bg='#E7ECEF' align="center">
  
  <img src={reservation} alt="reservation" />

  <Heading as='h4' size='md' textAlign="center" mt="1" >
  Reservations
   
  </Heading>
  <Text fontSize='4xl' >4</Text>

  </Box>

  </div> */}


{/* //////////////////////// */}


<div id="content1">
    
    <Box
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
      h="90%"   bg='#E7ECEF' align="center"  >
    
    <Heading as='h3' size='md' textAlign="center" mt="1" >
   Add new park
   
  </Heading>

      <Popover>
    <PopoverTrigger>
        <Button mt="7"><AddIcon/></Button>
    </PopoverTrigger>
    <PopoverContent>
       <PopoverCloseButton />
   <br/>
       <PopoverBody m="2" >
  <Input m="1" placeholder=' - parkNumber' size='sm' /> 
  <Input m="1" placeholder=' - section' size='sm' /> 
  <Input m="1" placeholder=' - pricePerHour' size='sm' /> 
  <Button m="2">Add </Button>
       </PopoverBody>
    </PopoverContent>
</Popover>
    </Box>
  
  
    </div>

  <main >

  <Heading as='h3' size='md' textAlign="start" m="2">
  Park
  </Heading>
<Box align="end" m="2">
{/* <Popover>
    <PopoverTrigger>
        <Button><AddIcon/></Button>
    </PopoverTrigger>
    <PopoverContent>
       <PopoverCloseButton />
   <br/>
       <PopoverBody m="2" >
  <Input m="1" placeholder=' - parkNumber' size='sm' /> 
  <Input m="1" placeholder=' - section' size='sm' /> 
  <Input m="1" placeholder=' - pricePerHour' size='sm' /> 
  <Button m="2">Add </Button>
       </PopoverBody>
    </PopoverContent>
</Popover> */}
</Box>
<TableContainer>
  <Table variant='striped' colorScheme='blue'>

<Thead>
  <Tr>
  <Th> Parking No. </Th>
  <Th> StartTime </Th>
  <Th> EndTime </Th>
  <Th> Price Per Hour </Th>
 
  </Tr>
</Thead>

<Tbody>

{/* {parks.map((park)=>(
  <ParkItem 
  parkingNo={park.parkNumber}
  startTime={park.startTime}
  endTime={park.endTime}
  price={park.pricePerHour}
  />

  ))} */}
</Tbody>

  </Table>
</TableContainer>
  </main>


</div>
      </>
      )
 };
 
 export default Park;
 
