import { PlayerResult } from "./player_result";

export interface FinalResult {

    user:       PlayerResult;
    prevUsers:  PlayerResult[];
    nextUsers:  PlayerResult[];
    position:   number;
    
}