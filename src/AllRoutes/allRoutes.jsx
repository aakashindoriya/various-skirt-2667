import {Routes,Route} from "react-router-dom"
import HomePage from "../paages/HomePage"
function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/Products" element={<h1>products</h1>}></Route>
        </Routes>
    )
}
export default AllRoutes