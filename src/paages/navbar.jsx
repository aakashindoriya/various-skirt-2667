import { Box } from "@chakra-ui/react"
import NavBottom from "../component/navBottom"
import NavUp from "../component/navupper"

function Navbar(){
return(
  <>
  <Box boxShadow={"0px 1px 0px 0px"} >
  <NavUp></NavUp>
  <NavBottom></NavBottom>
  </Box>
  </>
)

}
export default Navbar