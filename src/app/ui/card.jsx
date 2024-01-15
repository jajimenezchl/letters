'use client'

import { useState , useEffect } from "react";
import { randomNumber } from "@/app/utils";

export default function Card(props) {

    console.log({props}) // console.log(children)
    const [Letter, setLetter] = useState();

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    useEffect(() => {
        setLetter(randomNumber(0, 25));
    }, []);

    const handleClick = () => {
        setLetter(randomNumber(0, 25));
    }

    return (
        <div className="flex justify-center items-center w-40 min-h-64 border-2" onClick={handleClick} >
            <span className="text-7xl font-bold">{ props.name}{ letters[Letter] } </span>
        </div>
        
    )
}