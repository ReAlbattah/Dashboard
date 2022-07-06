import React from "react";
import { Tr, Td, IconButton, Switch} from "@chakra-ui/react";
import {DeleteIcon} from '@chakra-ui/icons'

const PendingItem = ({name,address,approve}) => {

    
  return (
   
  <Tr>
   <Td>{name}</Td>
   <Td>{address}</Td>
   <Td> <Switch onClick={approve} size='md' /></Td>
   </Tr>
   
  )
  }
export default PendingItem;
