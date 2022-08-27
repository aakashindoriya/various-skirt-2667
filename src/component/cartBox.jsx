import { Box, Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Authcontext } from "../Authcontext/appcontext";
function Cartbox({data}){
    let {state,dispatch}=useContext(Authcontext)
   
    useEffect(()=>{
        let total=data.reduce((ac,el)=>{
            return ac + Number(el.price)
        },0).toFixed(2)
        dispatch({type:"cartTotal",paylode:total})

    },[state.cart])
    function handleDelete(item){
        let newarr=data.filter((el)=>el.title!==item.title)
        dispatch({type:"cartDelete",paylode:newarr})
        
    }
    return (
        <>
        <Box bg={"gray.100"} width="100%" h={350} overflowY={"scroll"} >
            {data?.map((el)=>{
                return(
                    <Box margin={"2%"} bg={"white"}>
                     <Stack spacing={3}>
                     <Flex>
                       <Image src={el.image} w={"100px"} h={"100px"} margin="1%"/> 
                       <Text overflowY={"hidden"} width={"200px"}>{el.title}</Text>
                       </Flex>
                        <Flex justifyContent={"space-between"}>
                        <Text  fontSize='xl' >Price  $ {el.price}</Text>
                        <Button onClick={()=>handleDelete(el)}><Icon as={MdDelete}></Icon></Button>
                        </Flex>
                     </Stack>
                       
                    </Box>
                )
            })}
        </Box>
        <Box boxShadow={"base"} margin={"3%"} bg="gray.100" padding={"3%"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>Cart total $ {state.cartTotal}</Text>
        </Box>
        </>
    )
}
export default Cartbox