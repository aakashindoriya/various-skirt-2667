import {Routes,Route} from "react-router-dom"
import Address from "../component/address"
import SingleProduct from "../component/Products"
import BuyPage from "../paages/Buypage"
import HomePage from "../paages/HomePage"
import Private from "./privateRoute"
function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/Products/:id" element={<SingleProduct></SingleProduct>}></Route>
            <Route path="/payment" element={<Private><BuyPage /></Private>}></Route>
            <Route path="/address" element={<Address></Address>}></Route>
        </Routes>
    )
}
export default AllRoutes