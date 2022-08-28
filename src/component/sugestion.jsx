import { Box, Button, Flex, Icon, Image, Text, Tooltip } from "@chakra-ui/react";

import { TiShoppingCart, TiWorld } from "react-icons/ti";
import { useNavigate } from "react-router-dom";


function Sugestions({handleCart,data}){
    
let navigate=useNavigate()

   return(
    <Box>
    <Flex overflowX={"scroll"} columnGap="30px">
    {data?.map((el)=>{
                return (
                    <Box bgColor={"white"} margin="auto" >
                        <Image src={el.image} h={"250px" } w="250px" onClick={()=>navigate(`/Products/${el.id}`)} ></Image>
                        <p style={{width: "250px",
 whiteSpace: "nowrap",
 overflow:"hidden",
 textOverflow: "ellipsis"}}>{el.title}</p>
                        <Text>$ {el.price}</Text>
                        <Box margin={"20px"}>
                            <Flex justifyContent={"space-between"} h={10}>
                            <Icon as={TiWorld} w={6} h={6}></Icon>
                            
                            <Text>Aakash Store</Text>
                           
                            <Tooltip label='Add to cart' fontSize='md'>
                                <Button>
                                <Icon as={TiShoppingCart} w={6} h={6} onClick={()=>{
                                handleCart(el)
                                
                            }}></Icon>
                                </Button>
                            </Tooltip>
                            </Flex>
                        </Box>
                    </Box>
                )
            })}
    </Flex>
</Box>
   )
}
export default Sugestions