import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div className='bg-background w-full min-h-screen flex justify-center items-center flex-col'>
      <Link to="/registro"
        className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4 text-white font-inter font-semibold text-3xl'>
          Cadastrar
      </Link>
      <Link to="/dados"
        className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4 text-white font-inter font-semibold text-3xl'>
        Dados
      </Link>
      <Link to="/sobre"
        className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4 text-white font-inter font-semibold text-3xl'>
          Sobre
      </Link>
      <Link to="/config"
        className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4 text-white font-inter font-semibold text-3xl'>
        Configurações
      </Link>
    </div>
  );
}

export default Home;