import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { TiWorld,TiShoppingCart } from "react-icons/ti";
function HomeProducts({data}){
    console.log(data)
    return(
        <Box w={"90%"} margin="auto" bg={"gray.100"}>
            <Grid  templateColumns='repeat(5, 1fr)' gap={2} >
                {data?.map((el)=>{
                    return (
                        <Box bgColor={"white"} margin="auto">
                            <Image src={el.image} h={"250px" } w="250px"></Image>
                            <Text ><textarea maxlength="50" overflow="none">
                            {el.title}
</textarea></Text>
                            <Text>{el.price}</Text>
                            <Box margin={"0px"} border="1px">
                                <Flex>
                                <TiWorld></TiWorld>
                                <Text>Aakash Store</Text>
                                <TiShoppingCart></TiShoppingCart>
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