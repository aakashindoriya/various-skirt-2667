import { Box } from "@chakra-ui/react"
import NavBottom from "../component/navBottom"
import NavUp from "../component/navupper"

function Navbar(){
return(
  <>
  <Box boxShadow={"0px 1px 0px 0px"} position={"sticky" } top={"0px"} bg={"white"}>
  <NavUp></NavUp>
  <NavBottom></NavBottom>
  </Box>
  </>
)

}
export default Navbar