import React from "react";
import { Tr, Td } from "@chakra-ui/react";


const ReservationItem = ({parkingNo,startTime,endTime,price}) => {
  return (
   
  <Tr>
   <Td>{parkingNo}</Td>
   <Td>{startTime}</Td>
   <Td> {endTime}</Td>
   <Td> {price}  </Td>
   </Tr>
   
  )
  }
export default ReservationItem;
