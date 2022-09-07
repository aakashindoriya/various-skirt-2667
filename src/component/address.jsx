import React from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Stack,
    InputGroup,
    InputLeftAddon,
  } from '@chakra-ui/react'
import { useState } from "react"
import GanrateBill from "./bill"
 
function Address(){
    let [address,setAddress]=useState("")
    let [pincode,setpincode]=useState("")
    let [dob,setdob]=useState(null)
    let [phone,setphone]=useState("")
    return (
      <Box  margin={"5%"} display={"flex"} justifyContent={"center"} alignContent={"center"} >
        <FormControl w={"40%"} boxShadow={"outline"} padding="3%" borderRadius={"5%"}>
            <Stack spacing={3} >
            <FormLabel>address</FormLabel>
            <Input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>DOB</FormLabel>
            <Input placeholder="Select Date and Time"size="md" type="datetime-local"  onChange={(e)=>setdob(e.target.value)}/>
            <FormHelperText>Date of birth.</FormHelperText>
            <FormLabel>pin-code</FormLabel>
            <Input type='number' value={pincode} onChange={(e)=>setpincode(e.target.value)} />
            <FormHelperText>"postel address"</FormHelperText>
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='phone number' value={phone} onChange={(e)=>setphone(e.target.value)} />
            </InputGroup>
            <GanrateBill address={address} pincode={pincode} dob={dob} phone={phone} ></GanrateBill>
            </Stack>
        </FormControl>

      </Box>
    )
}
export default Address