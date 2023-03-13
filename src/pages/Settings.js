import React, { useContext } from 'react';
import Header from '../components/Header';

import { DataContext } from '../contexts/context';

function Settings(props){

    const {area, constant, density} = useContext(DataContext);


    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Configurações"} />
            <div className='w-1/3 my-4'>
                
                <div className='flex flex-row justify-around items-center my-2'>
                    <p className='font-inter font-medium text-xl'>Área</p>
                    <p className='font-inter font-light text-xl'>{area}</p>
                </div>
                <div className='flex flex-row justify-around items-center my-2'>
                    <p className='font-inter font-medium text-xl'>Constante</p>
                    <p className='font-inter font-light text-xl'>{constant}</p>
                </div>
                <div className='flex flex-row justify-around items-center my-2'>
                    <p className='font-inter font-medium text-xl'>Densidade</p>
                    <p className='font-inter font-light text-xl'>{density}</p>
                </div>
            </div>
        </div>
    );
}

export default Settings;