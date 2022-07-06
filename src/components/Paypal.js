import React, { useEffect} from "react";
import {Alert,AlertIcon, Box,Text} from '@chakra-ui/react'


const Paypal = () => {

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,actions)=>{
                return actions.order.create({
                    purchase_units:[{
                        amount:{
                            value:10.00,
                        }
                    }]
                });
            },
            onApprove:(data,actions)=>{
                return actions.order.capture().then(details =>{
                    alert('Thnak you' + details.payer.name.given_name);
                });
            }
        }).render('#paypal-button');
    },[])
  

  return (
   <Box display= "flex"
   alignItems= "center"
   justifyContent= "center"
   height= "100vh"  width="50">
   <Box boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
     m="3"  bg='#E7ECEF' align="center">

    <Text mt="4"  padding={2} fontSize='xl'> Continue to pay .  </Text>
     <div id="paypal-button"></div>
     </Box>
     </Box>
  )
}

export default Paypal;
