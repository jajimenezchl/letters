'use client'

import Table from '@/app/ui/card';
import { randomNumber } from "@/app/utils";
import { useEffect , useState } from 'react';

export default function Tablero() {


    return (
        <div className="flex flex-wrap align-middle gap-4 mx-auto">
             <Table />
        </div>
    )
}