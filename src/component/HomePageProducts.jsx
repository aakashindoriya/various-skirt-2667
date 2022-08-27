import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, Grid, Icon, Image, Popover, Text, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { TiWorld,TiShoppingCart } from "react-icons/ti";
import { Authcontext } from "../Authcontext/appcontext";
function HomeProducts({data}){
    let {state,dispatch}=useContext(Authcontext)
    console.log(state)
    function handleCart(el){
         let arr=state.cart.filter((e)=>e.title===el.title)||[]
        if(arr.length===0){
            dispatch({type:"addtocart",paylode:el})
          
        }
        else{
         alert("product is in your cart")
        }
        
        
    }
    
    return(
        <Box w={"90%"} margin="20px" bg={"gray.100"}>
            <Grid  templateColumns='repeat(5, 1fr)' gap={3} >
                {data?.map((el)=>{
                    return (
                        <Box bgColor={"white"} margin="auto">
                            <Image src={el.image} h={"250px" } w="250px"></Image>
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
            </Grid>
        </Box>
    )
}
export default HomeProducts