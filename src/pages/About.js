import React, { useContext } from 'react';
import Header from '../components/Header';
import { DataContext } from '../contexts/context';

function About(props){

    const { area } = useContext(DataContext);

    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Sobre"} />
            <p>{area}</p>
        </div>
    );
}

export default About;