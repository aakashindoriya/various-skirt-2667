import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Icon, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Getdatabyid } from "./API/getdata"
import {ChevronRightIcon} from '@chakra-ui/icons'
import { TiShoppingCart } from "react-icons/ti"
import { useContext } from "react"
import { Authcontext } from "../Authcontext/appcontext"
import Sugestions from "./sugestion"

function SingleProduct(){
    let {state,dispatch}=useContext(Authcontext)
    let [data,setdata]=useState({})
    let param=useParams()
    useEffect(()=>{
        dispatch({type:"lodingtrue"})
        Getdatabyid(param.id).then((res)=>setdata(res))
        dispatch({type:"lodingfalse"})
    },[param.id])
    let rate=data?.data?.rating.rate

    if(state.isloding){
        return(
            <h1>loding...</h1>
        )
    }
    function handleCart(el){
        let arr=state.cart.filter((e)=>e.title===el.title)||[]
       if(arr.length===0){
           dispatch({type:"addtocart",paylode:el})
         
       }
       else{
        alert("product is in your cart")
       }
       
       
   }

   

console.log(state)

    return(
        <>
       <Box m={"2%"}>
            <Flex w={"90%"} justifyContent={"space-between"} padding={"3%"}>
                <Box boxShadow={"lg"} w={"45%"} borderTopRadius="md">
                    <Image src={data?.data?.image} w={"400px"} h={"400px"}></Image>
                </Box>
                <Box boxShadow={"lg"} w={"45%"} padding={"3%"}>
                    <Stack spacing={10}>
                      <Box  >
                      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Products</BreadcrumbLink>
                                </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>{data?.data?.category}</BreadcrumbLink>
                            </BreadcrumbItem>
                            </Breadcrumb>                        
                      </Box>
                      <Box>
                            <Stack spacing={5}>
                           <Text fontSize='xl' as='b'>{data?.data?.title}</Text>
                           <Text fontSize='xl' as='b'>Description</Text>
                           <Text fontSize='xl' w={"400px"}>{data?.data?.description}</Text>
                           </Stack>
                           <Flex  w={"600px"} rowGap={"40px"} columnGap={"40px"}>
                            <Text fontSize='xl' as='b'>Ratings :-{rate}  </Text>
                            <Slider aria-label='ratings' defaultValue={20*rate} w={"200px"}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                                </Slider>
                            </Flex>
                            <Flex justifyContent={"space-between"}>
                            <Text marginTop={"2%"} fontSize='xl' >Total sale {data?.data?.rating.count}</Text>
                            <Button onClick={()=>handleCart(data?.data)}> <Icon as={TiShoppingCart} w={10} h={10}></Icon></Button>
                            </Flex>
                      </Box>
                      </Stack> 
                     
                </Box>
            </Flex>
            

       </Box> 
       <Sugestions data={state.productData} handleCart={handleCart} sug={data}/>
       </>
    )
}
export default SingleProduct