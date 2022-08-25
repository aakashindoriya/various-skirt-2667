import { Box, Flex, List, ListItem ,Text} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";


function NavBottom(){
let data=["Consumer Electronics","Industrial & Scientific","Cell Phones & Accessories","Appliances","Outdoors, Fitness & Sports","Computers, Tablets & Office","Health & Personal Care","Home Improvement & Tools"]
   
    let [show,setShow]=useState(false)
  
    return(
      <Box>
        <Flex>
           <Box onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}   w="20%" >
            <Text as='b' margin={"0px 90px 10px 90px  "} fontSize='xl'>Category</Text>
        <List spacing={3}>
        {show&&data.map((el)=>{
        return(<ListItem  _hover={{ borderColor: "yellow", bg: "gray.100"  }} ><Link to="/Products"><Text as='b'>{el}</Text></Link></ListItem>)
  })}
 
</List>
           </Box>
           <Box >
            <Text  as='b' margin={"0px 50px 10px 50px  "} fontSize='xl'>SUPER DEALS</Text>
           </Box>
           <Box >
            <Text  as='b' margin={"0px 50px 10px 50px  "} fontSize='xl'>APP ONLY</Text>
           </Box>
           <Box >
            <Text  as='b' margin={"0px 50px 10px 50px  "} fontSize='xl'>NEW ARIVAL</Text>
           </Box>
               
           
        </Flex>
      </Box>
    )
}
export default NavBottom