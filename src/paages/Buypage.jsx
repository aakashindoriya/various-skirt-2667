import { Box, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { Authcontext } from "../Authcontext/appcontext";

function BuyPage(){
    let {state,dispatch}=useContext(Authcontext)
    console.log(state.cart)
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
                                    <Text>$</Text>
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
    )
}
export default BuyPage