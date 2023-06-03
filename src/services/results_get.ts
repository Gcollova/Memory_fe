import axios from "axios";
import { endpoint } from "./endpoint";


export async function resultsGET(page?:number){
    const url = page ? `${endpoint}/scoreboard?page=${page}` : `${endpoint}/scoreboard`;
    return await axios.get(url)
}