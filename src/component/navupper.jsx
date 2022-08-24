import { Flex, Spacer,Image,Box,Input,  Select, Button,  Icon,Text } from '@chakra-ui/react'
import {Search2Icon } from '@chakra-ui/icons'
import { TiShoppingCart,TiUserAdd,TiHeartHalfOutline } from "react-icons/ti"
function NavUp(){

        return(
            <div>
                <Flex boxSizing='borderBox' justifyContent="space-evenly" >
                <Box boxSize='sm' alignItems={"center"}>
                   <Image src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' alt='Dan Abramov' h="50px" />
                </Box>
                <Box border="2px solid yellow" height={50}  borderRadius={10}>
                  <Flex>
                    <Select placeholder='All' height={50} width={110} border="transparent" >
                      <option>hello</option>
                    </Select>
                    <Input size="lg" placeholder='search'border="transparent" borderLeft={"1px solid yellow"}></Input>
                    <Button height={49}  border="transparent" backgroundColor={"yellow"}>
                    <Search2Icon></Search2Icon>
                    </Button>
                  </Flex>
                </Box>
               <Box  w={"30%"}>
               <Flex  justifyContent="space-evenly">
                    <Flex alignItems={"center"}>
                      <Icon as={TiUserAdd} w={10} h={10}></Icon>
                      <Text>Sign in</Text>
                      </Flex>
                      <Spacer />
                      <Flex alignItems={"center"}>
                      <Icon as={TiHeartHalfOutline} w={10} h={10}></Icon>
                      <Text>Sign in</Text>
                      </Flex >
                      <Spacer />
                      <Flex alignItems={"center"}>
                      <Icon as={TiShoppingCart} w={10} h={10}></Icon>
                      <Text>Sign in</Text>
                      </Flex>
                </Flex>
               </Box>
                </Flex>
            </div>
        )
    
}
export default NavUp