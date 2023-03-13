import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Loading from '../components/Loading';

function Settings(props){

    const [area, setArea] = useState();
    const [constant, setConstant] = useState();
    const [density, setDensity] = useState();

    async function getData(){
        
        await getDocs(collection(db, "GeneralSettings"))
            .then((querySnapshot) => {
                
                querySnapshot.docs
                    .forEach((doc) => {
                            const data = doc.data()
                            
                            setArea(data.area);
                            setConstant(data.constant);
                            setDensity(data.density);                     
                    })
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Configurações"} />
            <div className='w-1/3 my-4'>
                
                <div className='flex flex-row justify-around items-center my-2'>
                    <p className='font-inter font-medium text-xl'>Área</p>

                    {
                        area ?
                            <p className='font-inter font-light text-xl'>{area}</p>
                        :
                            <Loading />
                    }

                </div>
                <div className='flex flex-row justify-around items-center my-2'>
                    <p className='font-inter font-medium text-xl'>Constante</p>
                    {
                        constant ?
                            <p className='font-inter font-light text-xl'>{constant}</p>
                        :
                            <Loading />
                    }
                </div>
                <div className='flex flex-row justify-around items-center my-2'>
                    <p className='font-inter font-medium text-xl'>Densidade</p>
                    {
                        density ?
                            <p className='font-inter font-light text-xl'>{density}</p>
                        :
                            <Loading />
                    }
                </div>
            </div>
        </div>
    );
}

export default Settings;