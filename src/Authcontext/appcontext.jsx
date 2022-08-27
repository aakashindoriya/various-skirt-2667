import { useReducer } from "react";
import { createContext } from "react";

export let Authcontext=createContext()
let initialState={
    isAuth:false,
    isloding:false,
    productData:[],
    token:null,
    signup:true,
    cart:[],
    favorate:[],
    cartTotal:null

}
function reducer(state,action){
    switch(action.type){
        case "LoginSuccess": return {
            ...state,isAuth:true,token:action.paylode
        }
        case "signupSuccess":return {
            ...state,signup:false
        }
        case "signupUnsuccess":return{
            ...state,signup:true
        }
        case "addtocart":return{
            ...state,cart:[...state.cart,action.paylode]
        }
        case "cartTotal":return{
            ...state,cartTotal:action.paylode
        }
        case "cartDelete":return{
            ...state,cart:action.paylode
        }
        default :return state
    }
}
function AuthProvider({children}){
let [state,dispatch]=useReducer(reducer,initialState)
let value={state,dispatch}
    return(
        <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
    )
}
export default AuthProvider