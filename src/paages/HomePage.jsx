import { Box, Flex, Spinner, StatHelpText } from "@chakra-ui/react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Authcontext } from "../Authcontext/appcontext";
import { GetData } from "../component/API/getdata";
import HomeProducts from "../component/HomePageProducts";

function HomePage(){
    let {state,dispatch}=useContext(Authcontext)
    useEffect(()=>{
        dispatch({type:"lodingtrue"})
        
        GetData().then((res)=>
            
            dispatch({type:"producData",paylode:res.data})
        )
        dispatch({type:"lodingfalse"})
       
    },[]) 
  
    if(state.isloding){
        return(
            <>
           <Box w="90%" h={"90%"} display={"flex"} alignItems="center" justifyContent={"center"}>
           <Spinner
               
               thickness='4px'
               speed='0.65s'
               emptyColor='gray.200'
               color='blue.500'
               size='xl'
               />
           </Box>
            </>
        )
    }
    return(
        <Box>
            <Flex>
                <Box>
                    <HomeProducts data={state.productData}></HomeProducts>

                </Box>

            </Flex>

        </Box>
    )
}
export default HomePage