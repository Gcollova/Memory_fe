import { Card } from "../models/card";

 const imgURLs: string[] = [
  "https://icons.iconarchive.com/icons/designbolts/monsters-university/128/Cute-Monsters-icon.png",
  "https://icons.iconarchive.com/icons/icons-land/multiple-smiley/128/Monster-Sick-icon.png",
  "https://icons.iconarchive.com/icons/spoon-graphics/monster/128/Purple-Monster-icon.png",
  "https://icons.iconarchive.com/icons/madoyster/favorite-monsters/128/monster-blue-icon.png",
  "https://icons.iconarchive.com/icons/madoyster/favorite-monsters/128/monster-brown-icon.png",
  "https://icons.iconarchive.com/icons/madoyster/favorite-monsters/128/monster-orange-icon.png",
  "https://icons.iconarchive.com/icons/madoyster/favorite-monsters/128/monster-pink-icon.png",
  "https://icons.iconarchive.com/icons/spoon-graphics/monster/128/Blue-Monster-icon.png",
];

export const cards:Card[] = imgURLs.map((el,index) => {
    return {
        name: `monster_${index}`,
        img: el 
    }
})