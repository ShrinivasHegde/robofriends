import React from "react";
//import {robots} from './robots.js'
import Card from "./card.js";

function CardList({robots}){  
    // if(true){
    //     throw new Error('Nooooo')
    // }
    
    return(
             <div>
                {robots.map((user,i)=>{
                    return (
                             <Card 
                                key={i} 
                                id={robots[i].id} 
                                name={robots[i].name} 
                                email={robots[i].email}/>
                            )
                        })}
             </div>
        )
}
export default CardList