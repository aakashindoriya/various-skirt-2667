import axios from "axios";

export function GetData(){
   return axios.get("https://fakestoreapi.com/products")
}
export function Setuser(data){
   return axios.post("https://mkibap.onrender.com/users",data)
}
export function Loginuser(){
   return axios.get("https://mkibap.onrender.com/users")
}
export function Getdatabyid(id){
   console.log(id)
   return axios.get(`https://fakestoreapi.com/products/${id}`)
}
