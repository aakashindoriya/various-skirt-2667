import { Box, Button, Flex, Icon, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Authcontext } from "../Authcontext/appcontext";
import { useNavigate } from 'react-router-dom'

function BuyPage(){
    let {state,dispatch}=useContext(Authcontext)
    let navigate=useNavigate()
    
    function handleDelete(item){
        let newarr=state.cart.filter((el)=>el.title!==item.title)
        dispatch({type:"cartDelete",paylode:newarr})
        
    }
    return (
        <Box>
            <Table>
                <Thead>
                    <Th> Selected items</Th>
                    <Th> Unit price</Th>
                    <Th> Sub total</Th>
                    
                </Thead>
                <Tbody>
                    {state.cart.map((el)=>{
                        return(
                            <Tr>
                                <Td>
                                    <Flex justifyContent={"space-around"}>
                                    <Image h={"200"} w={"200"} src={el.image}/>
                                    <Text w={"300px"} fontSize={"xl"}>{el.title}</Text>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text>$ {el.price}</Text>
                                </Td>
                                <Td>
                                <Button onClick={()=>handleDelete(el)}><Icon as={MdDelete}></Icon></Button>
                                </Td>
                            </Tr>
                        )
                    })}
                    <Tr>
                        <Td></Td><Td></Td><Td><Text fontSize={"xl"}>total amount $ {state.cartTotal}</Text></Td>
                    </Tr>
                </Tbody>
            </Table>
            <Box >
                <Flex alignContent={"center"} justifyContent={"center"} h={"200px"}>
                    <Button w={"50%"} colorScheme={"whatsapp"} onClick={()=>navigate("/address")}>Buy-Now</Button>
                </Flex>
            </Box>
        </Box>
    )
}
export default BuyPage