import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    Link,
    Flex,
    Icon,
    Text,
  } from '@chakra-ui/react'
  import { FcPortraitMode } from "react-icons/fc";
import { useContext } from 'react'
import { useState } from 'react'
import { TiUserAdd } from 'react-icons/ti'
import { Authcontext } from '../Authcontext/appcontext'
import { Loginuser, Setuser } from './API/getdata'
  function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
 let [email,setEmail]=useState("")
 let [pass,setPass]=useState("")
 let [name,setName]=useState("")
 const {state,dispatch}=useContext(Authcontext)
 function ShowData(){
    let data={
        "email":email,
        "password":pass,
        "name":name
    }
    if(name===""||email===""||pass===""){dispatch({type:"signupUnsuccess"})}
    else{
      Setuser(data).then((res)=>{
        alert("sign up successful")
        dispatch({type:"signupSuccess"})
       }).catch(()=>{
        alert("nooop")
       })
    }
    setEmail("")
    setName("")
    setPass("")
    
  }
  function handleLogin(){
    dispatch({type:"signupSuccess"})
    if(!state.isAuth&&name===""){
      if(email!==""&&pass!==""){
        Loginuser().then((res)=>{
        let arr=res.data.filter((el)=>el.email===email&&el.password===pass)
        if(arr.length===0){
          alert("invalid credentials")
        }
        else{
          dispatch({type:"LoginSuccess",paylode:arr[0].name})
          alert("log in successful")
          setEmail("")
          setName("")
          setPass("")
        }
        })
      }
    }
  }
  if(state.isAuth){
    return(
      <Link> <Flex alignItems={"center"} onClick={onOpen}>
                      <Icon as={FcPortraitMode} w={10} h={10}></Icon>
                      <Text >{state.token}</Text>
                      </Flex>
                   </Link>
    )
  }
  
    return (
      
           <>
      <Link> <Flex alignItems={"center"} onClick={onOpen}>
                      <Icon as={TiUserAdd} w={10} h={10}></Icon>
                      <Text >Sign in</Text>
                      </Flex>
                   </Link>
        <Modal
         
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{state.signup?"create account ":"log in with credentials"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {state.signup&&<FormControl>
                <FormLabel>Name</FormLabel>
                <Input  placeholder=' name' value={name} onChange={(e)=>setName(e.target.value)} />
              </FormControl>}
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type={"email"} placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} placeholder='passowrd' value={pass} onChange={(e)=>setPass(e.target.value)} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>ShowData()} disabled={name==""&&email==""&&pass==""&&state.signup?true:false}>
                Sign up
              </Button>
              <Button  onClick={()=>handleLogin()}>Log-in</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default  InitialFocus