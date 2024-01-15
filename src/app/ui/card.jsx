'use client'

import { useState , useEffect } from "react";
import { randomNumber } from "@/app/utils";
import { array_letters } from "@/app/definitions";


export default function table(props) {

    
    const [list_letter, setlist_letter] = useState(2);   
    get_letter_enable(list_letter)

    return (
        <>
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        </>
    )
}

export function Card(props) {

    const [Letter, setLetter] = useState();

    const handleClick = () => {
        setLetter(randomNumber(0, 25));
    }

    // useEffect(() => {
    //     randomNumber(0, 25)
    // })

    return (
        <div className="flex justify-center items-center bg-gray-100 w-40 min-h-40 border-2 shadow-lg p-4 rounded m-4" onClick={handleClick} >
            <p className="text-7xl font-bold drop-shadow-2xl">{ array_letters(Letter) } </p>
        </div>
       
        
    )
}



function get_letter_enable(letter){
console.log(letter)
}