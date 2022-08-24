import { Box, Button, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useState } from "react";

function NavBottom(){
    let [show,setShow]=useState(false)
    let arr=["consumer","cell-phone","mobile"]
    return(
      <Box>
        <Flex>
           <Box >
            <Button onMouseEnter={()=>setShow(true)} onMouseOut={()=>setShow(false)}>Category</Button>
 <List spacing={3}>
  {show&&arr.map((el)=>{
   return <ListItem>{el}</ListItem>
  })}
 
</List>
           </Box>
               
           
        </Flex>
      </Box>
    )
}
export default NavBottom