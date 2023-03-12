import React from 'react';
import Header from '../components/Header';

function Settings(props){
    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Configurações"} />
        </div>
    );
}

export default Settings;