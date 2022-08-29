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
   
  } from '@chakra-ui/react'
import { useContext } from 'react'

import { TiShoppingCart } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../Authcontext/appcontext'
import Cartbox from './cartBox'
function Cart() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {state} =useContext(Authcontext)
    let navigate=useNavigate()
    return (
      <>
        <Flex alignItems={"center"} onClick={onOpen}>
                      <Icon as={TiShoppingCart} w={10} h={10}></Icon>
                      <Icon viewBox='0 0 200 200' color={state.cart.length===0?"red":"yellow"} position={"absolute"}>
                        <path
                          fill='currentColor'
                          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                      </Icon>
                      <Text>Cart({state.cart.length})</Text>
                      </Flex>
      
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>CART {state.token}</DrawerHeader>
  
            <DrawerBody>
             <Cartbox data={state.cart}></Cartbox>
              
            </DrawerBody>
  
            <DrawerFooter>
              
              <Button colorScheme='blue' w={"90%"} margin="auto" onClick={()=>{
               navigate("/payment")
              }}>Buy Now</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default Cart