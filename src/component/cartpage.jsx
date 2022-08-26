import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Flex,
    Icon,
    Text,
    useConst,
  } from '@chakra-ui/react'

import { TiShoppingCart } from 'react-icons/ti'
import { Authcontext } from '../Authcontext/appcontext'
function Cart() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  let {state,dispatch}=useConst(Authcontext)
  console.log(state)
  
    return (
      <>
        <Flex alignItems={"center"} onClick={onOpen}>
                      <Icon as={TiShoppingCart} w={10} h={10}></Icon>
                      <Text>Sign in</Text>
                      </Flex>
      
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
             
              {/* {state.cart.map((el)=>{
               return (<Button>{el.title}</Button>)
              })} */}
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default Cart