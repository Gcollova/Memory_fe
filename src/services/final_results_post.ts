import axios from "axios";
import { PlayerResult } from "../models/player_result";
import { endpoint } from "./endpoint";


export async function resultsPOST(body:PlayerResult){
    const url =  `${endpoint}/end` ;
    return await axios.post(url,body)
}