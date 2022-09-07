import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { Authcontext } from "../Authcontext/appcontext";

function Private({children}){
let {state} =useContext(Authcontext)
if(state.isAuth){
    return children
}
else{
    alert("please log in first")
    return (
        <Navigate to="/"></Navigate>
    )
}

}
export default Private