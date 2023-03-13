import React, { useState } from 'react';
import Header from '../components/Header';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Data(props){

    const [dataList, setDataList] = useState();

    async function getData(){
        
        await getDocs(collection(db, "Measurements"))
        .then((querySnapshot)=>{
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            
            setDataList(newData);
            console.log(dataList, newData);

        })
    }

    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Dados"} />
            <button
                className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4 text-white font-inter font-semibold text-3xl'
                onClick={getData}
            >
                Ler dados
            </button>
        </div>
    );
}

export default Data;