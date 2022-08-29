import { Box, Flex, List, ListItem ,Tab,TabList,Tabs,Text} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBottom(){
let data=["Consumer Electronics","Industrial & Scientific","Cell Phones & Accessories","Appliances","Outdoors, Fitness & Sports","Computers, Tablets & Office","Health & Personal Care","Home Improvement & Tools"]
   
    let [show,setShow]=useState(false)
    let navigate=useNavigate()
  
    return(
      <Box>
        <Flex>
           <Box onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}   w="20%" >
            <Text as='b' margin={"0px 80px 0px 80px"} fontSize='xl'>CATEGORY</Text>
        <List spacing={6}>
        {show&&data.map((el)=>{
        return(<ListItem  _hover={{ borderColor: "yellow", bg: "gray.100"  }} ><Link to="/Products"><Text as='b'>{el}</Text></Link></ListItem>)
  })}
 
</List>
           </Box>
          
           <Tabs>
  <TabList>
    <Tab onClick={()=>{
      navigate("/")
    }}><Text  as='b' margin={"0px 50px 10px 50px  "} fontSize='xl'>SUPER DEALS</Text></Tab>
    <Tab><Text  as='b' margin={"0px 50px 10px 50px  "} fontSize='xl'>APP ONLY</Text></Tab>
    <Tab><Text  as='b' margin={"0px 50px 10px 50px  "} fontSize='xl'>NEW ARIVAL</Text></Tab>
  </TabList></Tabs>
               
           
        </Flex>
      </Box>
    )
}
export default NavBottom