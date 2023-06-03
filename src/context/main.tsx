import { createContext } from "react";
import { FinalResult } from "../models/final_result";
import { PageInfo } from "../models/page_info";
import { PlayerResult } from "../models/player_result";
export interface MainContextI{
    results:            PlayerResult[];
    setResults:         React.Dispatch<React.SetStateAction<PlayerResult[]>>;
    pageInfo:           PageInfo | undefined;
    setPageInfo:        React.Dispatch<React.SetStateAction<PageInfo | undefined>>;
    player:             PlayerResult | undefined;
    setPlayer:          React.Dispatch<React.SetStateAction<PlayerResult | undefined>>;
    alreadySelected:    string[];
    setAlreadySelected: React.Dispatch<React.SetStateAction<string[]>>;
    finalResult:        FinalResult | undefined;
    setFinalResult:     React.Dispatch<React.SetStateAction<FinalResult | undefined>>;
    modal:              any;
    setModal:           React.Dispatch<React.SetStateAction<any>>;


}

export  const MainContext = createContext<MainContextI>({} as MainContextI);