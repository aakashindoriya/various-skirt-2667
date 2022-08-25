import axios from "axios";

export function GetData(){
   return axios.get("https://fakestoreapi.com/products?limit=40")
}