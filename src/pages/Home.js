import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { DataContext } from '../contexts/context';
import Loading from '../components/Loading';

function Home(){

  const {area, setArea, constant, setConstant, density, setDensity} = useContext(DataContext);

  const [isLoaded, setIsLoaded] = useState(false);

  async function getData(){
      
      await getDocs(collection(db, "GeneralSettings"))
          .then((querySnapshot) => {
              
              querySnapshot.docs
                  .forEach((doc) => {
                          const data = doc.data()
                          
                          console.log(data.area);
                          console.log(data.constant);
                          console.log(data.density);
                          setArea(data.area);
                          setConstant(data.constant);
                          setDensity(data.density);
                          setIsLoaded(true);                
                  })
          })
  }

  useEffect(() => {
      getData()
  }, [])

  return (
    <>
      {
        (isLoaded) ? (
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
            <p>{area}</p>
            <p>{constant}</p>
            <p>{density}</p>
          </div>)
        :
        (<Loading />)
      }
    </>
  );
}

export default Home;