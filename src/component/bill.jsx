import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StatHelpText, Text, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { Authcontext } from "../Authcontext/appcontext"

function GanrateBill({phone,address,pincode,dob}) {
    let {state}=useContext(Authcontext)
    console.log(dob,pincode,phone)
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Buy now</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Aakash store</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Text>name {state.token}</Text>
              <Flex>
                {state.cart.map((el)=>{
                    return(
                       
                                <Image w={"40px"} h={"40px"} src={el.image} m="2%"></Image>
                           
                     
                    )
                })}                
              </Flex>
              <Text>Shippin Address :- {address}</Text>
              <Text>Dob :- {pincode}</Text>
              <Text>Phone number:- +91 {phone}</Text>
              <Text>total amount :-{state.cartTotal}</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                {`pay ${state.cartTotal} `}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default GanrateBill