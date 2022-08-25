import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetData } from "../component/API/getdata";
import HomeProducts from "../component/HomePageProducts";

function HomePage(){
    let [data,setData]=useState([])
    useEffect(()=>{
        GetData().then((res)=>{
            setData(res.data)
        })
    },[])
    console.log(data)
    return(
        <Box>
            <Flex>
                <Box>
                    <HomeProducts data={data}></HomeProducts>

                </Box>

            </Flex>

        </Box>
    )
}
export default HomePage