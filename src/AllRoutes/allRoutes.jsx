import {Routes,Route} from "react-router-dom"
import BuyPage from "../paages/Buypage"
import HomePage from "../paages/HomePage"
function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/Products" element={<h1>products</h1>}></Route>
            <Route path="/payment" element={<BuyPage></BuyPage>}></Route>
        </Routes>
    )
}
export default AllRoutes