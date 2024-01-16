'use client'

import { useState , useEffect } from "react";
import { randomNumber } from "@/app/utils";
import { array_letters } from "@/app/definitions";

var list_used = [];

export default function table() {

    
    // const [list_letter, setlist_letter] = useState(2);   
    // get_letter_enable(list_letter)

    return (
        <>
        <Card letter_active={ get_letter_enable()}/>
        <Card letter_active={ get_letter_enable()}/>
        <Card letter_active={ get_letter_enable()}/>
        <Card letter_active={ get_letter_enable()}/>
        <Card letter_active={ get_letter_enable()}/>
        <Card letter_active={ get_letter_enable()}/>
        </>
    )
}

export function Card(props) {

    const [Letter, setLetter] = useState(props.letter_active);

    const handleClick = () => {
        setLetter(get_letter_enable());
    }



    return (
        <div className="flex justify-center items-center bg-gray-100 w-40 min-h-40 border-2 shadow-lg p-4 rounded m-4" onClick={handleClick} >
            <p className="text-7xl font-bold drop-shadow-2xl">{ array_letters(Letter) } </p>
        </div>
       
        
    )
}



function get_letter_enable(){
 let letter_rm = randomNumber(0, 25);
 if (!list_used.includes(letter_rm)){
    list_used.push(letter_rm);
    console.log(list_used)
    return letter_rm;
 }
}