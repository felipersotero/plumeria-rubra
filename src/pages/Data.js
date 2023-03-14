import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

import dayjs from 'dayjs';

function Data(props){

    const [dataList, setDataList] = useState([]);
    const [registerCount, setRegisterCount] = useState();

    //const [dataListFixed, setDataListFixed] = useState([]);

    //const elements = ["1", "2", "3"]

    async function getData(){
        
        const q = query(collection(db, "Measurements"), orderBy("date", "desc"));

        await getDocs(q)
        .then((querySnapshot)=>{
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            
            setDataList(newData);
            setRegisterCount(querySnapshot.size);
            console.log(dataList, newData);

        })
    }

    // function fixeData(){

    //     const massesFixed = dataList.masses.map((number) => {number.toFixed(4)})
    //     const corrosionRatesFixed = dataList.corrosionRates.map((number) => {number.toFixed(4)})
    //     const efficienciesFixed = dataList.efficiencies.map((number) => {number.toFixed(2)})

    // }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Dados"} />
            <div className='w-full flex flex-col justify-center'>
                {
                    dataList.map((e, i) => {
                        return (
                            <div key={i} className='flex flex-col  border-2 border-border rounded-xl overflow-hidden m-2'>
                                <div className='bg-primary flex flex-row items-center justify-start p-4'>
                                    <p className='font-inter font-semibold text-xl text-white mx-4'>Registro {registerCount-i}</p>
                                    <p className='font-inter font-semibold text-xl text-white mx-4'>{dayjs(e.date).format("DD/MM/YYYY HH:mm")}</p>
                                </div>
                                <div className='flex flex-row justify-between p-4'>
                                    {e.masses.map((m, j) => {
                                        return (
                                            <div key={j} className='flex flex-col'>
                                                {
                                                    (j == 0) ? 
                                                            <div className='flex flex-row'>
                                                                <div>
                                                                    <p className='font-inter font-medium text-base'>Dados</p>
                                                                    <p className='font-inter font-medium text-base'>Massa (g)</p>
                                                                    <p className='font-inter font-medium text-base'>Coeficiente de Corrosão</p>                                            
                                                                    <p className='font-inter font-medium text-base'>Eficiência de Inibição (%)</p>           
                                                                </div>
                                                                <div className='border-l-2 border-border mx-4' />
                                                                <div>
                                                                    <p className='font-inter font-medium text-base'>Amostra {j+1}</p>
                                                                    <p className='font-inter font-light text-base'>{Number(e.masses[j]).toFixed(4)}</p>
                                                                    <p className='font-inter font-light text-base'>{Number(e.corrosionRates[j]).toFixed(4)}</p>                                            
                                                                    <p className='font-inter font-light text-base'>{Number(e.efficiencies[j]).toFixed(4)}</p>           
                                                                </div>

                                                            </div>     
                                                        :   
                                                            <>
                                                                <p className='font-inter font-medium text-base'>Amostra {j+1}</p>
                                                                <p className='font-inter font-light text-base'>{Number(e.masses[j]).toFixed(4)}</p>
                                                                <p className='font-inter font-light text-base'>{Number(e.corrosionRates[j]).toFixed(4)}</p>                                            
                                                                <p className='font-inter font-light text-base'>{Number(e.efficiencies[j]).toFixed(4)}</p>   
                                                            </>
                                                    }
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Data;