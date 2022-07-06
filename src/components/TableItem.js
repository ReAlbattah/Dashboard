import React from "react";
import { Tr, Td, IconButton, } from "@chakra-ui/react";
import {DeleteIcon} from '@chakra-ui/icons'

const TableItem = ({name,email,phoneNumber,remove}) => {
  return (
   
  <Tr>
   <Td>{name}</Td>
   <Td>{email}</Td>
   <Td> {phoneNumber}</Td>
   <Td> <IconButton><DeleteIcon/></IconButton>  </Td>
   </Tr>
   
  )
  }
export default TableItem;
