import React, {useState, useEffect, useContext,useMemo} from 'react';
import { cards } from '../../assets/icons';
import { MainContext } from '../../context/main';
import { Card } from '../../models/card';
import { shuffleArray } from '../../services/shuffle_array';
import styles from './styles.module.scss';



const GameOutlet = () => {
    const [alreadyShuffled,setAlreadyShuffled]= useState(false)
    const {alreadySelected,setAlreadySelected} = useContext(MainContext);
    const [definitiveArray,setDefinitiveArray] = useState<Card[]>([...cards,...cards.map(el => {return {...el,name:el.name+"Double"}})]);
    const [selectedOne,setSelectedOne] = useState<string>();
    const [selectedTwo,setSelectedTwo] = useState<string>();
    

    function handleSelectCard(cardName:string){
       

        if(cardName !== selectedOne && cardName !== selectedTwo)
        if(selectedOne === undefined){
            setSelectedOne(cardName)
        } else if(selectedOne !== undefined && selectedTwo === undefined){
            setSelectedTwo(cardName)
        } else if(selectedOne && selectedTwo){
            setSelectedOne(cardName)
            setSelectedTwo(undefined)
        } 

    }

    useEffect(() => {
        if(!alreadyShuffled){
            setDefinitiveArray(shuffleArray(definitiveArray));
            setAlreadyShuffled(true)
        }
      if(selectedOne+"Double" === selectedTwo){
        setAlreadySelected([...alreadySelected,selectedOne!,selectedTwo!]);
        setSelectedOne(undefined);
        setSelectedTwo(undefined)

      }else if(selectedTwo+"Double" === selectedOne){
        setAlreadySelected([...alreadySelected,selectedOne!,selectedTwo!]);
        setSelectedOne(undefined);
        setSelectedTwo(undefined)

      }
    }, [selectedOne,selectedTwo]);

   
    

    return(
        <div className={styles.main}>
            {
                definitiveArray.map((el => {
                    return(
                        <div onClick={() =>  handleSelectCard(el.name)} className={`${styles.card} ${(selectedOne === el.name || selectedTwo === el.name || alreadySelected.includes(el.name) )  && styles.isFlipped}`} key={el.name}>
                            {/* <img className={styles.cardFaceBack} src={el.img} alt={el.name}/>
                            <div className={styles.cardFaceFront}></div> */}
                            <div className={styles.cardFaceFront}>

                            </div>
                            <div className={styles.cardFaceBack}>
                                <img src={el.img} alt={el.name} />

                            </div>

                        </div>
                    )
                }))
            }

        </div>
    )
}

export default GameOutlet;