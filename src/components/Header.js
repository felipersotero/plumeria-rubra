import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

function Header(props){
    return (
        <div className='bg-primary w-full h-24 flex justify-center items-center flex-row p-8'>
            <div>
                <Link to="/home">
                    <FiArrowLeft className='text-white hover:text-white/90 w-12 h-12' /> 
                </Link>
            </div>
            <div className='flex justify-center w-full'>
                <h1 className='text-white font-inter font-bold text-4xl'>{props.nome}</h1>     
            </div>
            <div className='w-12 h-12'></div>
        </div>
    );
}

export default Header;