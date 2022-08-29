import axios from "axios";

export function GetData(){
   return axios.get("https://fakestoreapi.com/products")
}
export function Setuser(data){
   return axios.post("http://localhost:3000/users",data)
}
export function Loginuser(){
   return axios.get("http://localhost:3000/users")
}
export function Getdatabyid(id){
   console.log(id)
   return axios.get(`https://fakestoreapi.com/products/${id}`)
}