import React from 'react';
import Header from '../components/Header';

function About(props){
    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Sobre"} />
        </div>
    );
}

export default About;