import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import { FiCheck } from "react-icons/fi";
import Card from '../components/Card';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { DataContext } from '../contexts/context';

import plumeria from '../images/plumeria.png';
import talo from '../images/talo.png';

function Register(){

    //Constantes

    const {area, constant, density, initialMasses} = useContext(DataContext);

    //States

    const [lastTime, setLastTime] = useState(0);
    const [masses, setMasses] = useState([]);
    const [corrosionRates, setCorrosionRates] = useState([]);
    const [efficiencies, setEfficiencies] = useState([]);

    //Funções

    function saveTime(){
        console.log(process.env.REACT_APP_TEST)
    }

    function changeTime(e){
        setLastTime(e.target.validity.valid ? e.target.value : e)
    }

    function changeMasses(value, n){

        const updatedMasses = [...masses]
        updatedMasses[n] = value
        setMasses(updatedMasses)
        console.log(masses)
        console.log(value)
    }

    function calculate(){

        console.log(masses);
        console.log(initialMasses);
        
        for(let i = 0; i < 12; i ++){
            console.log(initialMasses[i] - masses[i])
        }

        if(lastTime <= 0){
            alert("Digite um tempo válido!")
            window.scrollTo({ top: 0, behavior: 'smooth' })

        } else {
            setCorrosionRates(masses
                .map((mass, i) => i < 12 
                    ? ((constant*(initialMasses[i]-mass))/(area*lastTime*density))
                    : mass))

            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

    }

    function save() {

        const data = {
            corrosionRates: corrosionRates,
            efficiencies: efficiencies,
            masses: masses,
            date: new Date().getTime()
        }

        const collectionRef = collection(db, "Measurements");

        addDoc(collectionRef, data)
            .then((docRef) => {
                console.log("Documento criado com ID:", docRef.id);
                alert("Registrado com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao criar documento:", error);
                alert("Ocorreu um erro ao tentar salvar registro.");
          });

        
        //collection(db, "Measurements")

        // const collectionRef = firebase.firestore().collection("nomedacolecao");

        // // Cria um objeto com os dados que serão adicionados ao documento
        // const data = {
        // campo1: "valor1",
        // campo2: "valor2",
        // campo3: "valor3"
        // };

        // // Adiciona o objeto à coleção usando o método add()
        // collectionRef
        // .add(data)
        // .then((docRef) => {
        //     console.log("Documento criado com sucesso:", docRef.id);
        // })
        // .catch((error) => {
        //     console.error("Erro ao criar documento:", error);
        // });


    }

    useEffect(()=>{
            
        setEfficiencies(corrosionRates
            .map((rate, i) => i < 6
                ? (corrosionRates[0]-rate)*100/(corrosionRates[0])
                : (corrosionRates[6]-rate)*100/(corrosionRates[6])))

    }, [corrosionRates])

    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <Header nome={"Cadastro"} />
            <div className='flex flex-col sm:flex-row w-3/4 h-32 justify-around my-4'>
                <div>
                    <p className='font-inter font-medium text-xl'>Último cadastro</p>
                </div>
                <div>
                    <p className='font-inter font-medium text-xl'>Tempo desde o último cadastro</p>
                    <div className='flex flex-row justify-around items-center'>
                        <input
                            className='border-2 border-gray-500 rounded-md h-12 w-36 my-2 font-inter font-normal text-2xl'
                            type="number"
                            onChange={changeTime}
                        />
                        <p className='font-inter font-light text-xl'>horas</p>
                        <button className='bg-primary w-12 h-12 rounded-full flex items-center justify-center' onClick={saveTime} >
                            <FiCheck className='text-white text-3xl' />
                        </button>
                    </div>
                </div>
            </div>

            {/*Abaixo estão os "containers" com as informações de cada tubo*/}

            <div className='w-4/5 lg:w-3/5 flex flex-col lg:flex-row gap-6'>
                <div className='w-full lg:w-1/2'>
                    <Card tubeNumber={"01"} image={plumeria} percent={"0"}  changeMasses={changeMasses} corrosionRate={corrosionRates[0]} efficiency={efficiencies[0]} />
                    <Card tubeNumber={"02"} image={plumeria} percent={"1"}  changeMasses={changeMasses} corrosionRate={corrosionRates[1]} efficiency={efficiencies[1]} />
                    <Card tubeNumber={"03"} image={plumeria} percent={"5"}  changeMasses={changeMasses} corrosionRate={corrosionRates[2]} efficiency={efficiencies[2]} />
                    <Card tubeNumber={"04"} image={plumeria} percent={"10"} changeMasses={changeMasses} corrosionRate={corrosionRates[3]} efficiency={efficiencies[3]} />
                    <Card tubeNumber={"05"} image={plumeria} percent={"15"} changeMasses={changeMasses} corrosionRate={corrosionRates[4]} efficiency={efficiencies[4]} />
                    <Card tubeNumber={"06"} image={plumeria} percent={"20"} changeMasses={changeMasses} corrosionRate={corrosionRates[5]} efficiency={efficiencies[5]} />
                </div>
                <div className='w-full lg:w-1/2'>
                    <Card tubeNumber={"07"} image={talo} percent={"0"}  changeMasses={changeMasses} corrosionRate={corrosionRates[6]}  efficiency={efficiencies[6]} />
                    <Card tubeNumber={"08"} image={talo} percent={"1"}  changeMasses={changeMasses} corrosionRate={corrosionRates[7]}  efficiency={efficiencies[7]} />
                    <Card tubeNumber={"09"} image={talo} percent={"5"}  changeMasses={changeMasses} corrosionRate={corrosionRates[8]}  efficiency={efficiencies[8]} />
                    <Card tubeNumber={"10"} image={talo} percent={"10"} changeMasses={changeMasses} corrosionRate={corrosionRates[9]}  efficiency={efficiencies[9]} />
                    <Card tubeNumber={"11"} image={talo} percent={"15"} changeMasses={changeMasses} corrosionRate={corrosionRates[10]} efficiency={efficiencies[10]} />
                    <Card tubeNumber={"12"} image={talo} percent={"20"} changeMasses={changeMasses} corrosionRate={corrosionRates[11]} efficiency={efficiencies[11]} />
                </div>
                {/* <div className='w-1/2'>
                    <Card tubeNumber={"01"} percent={"0"}  changeMasses={(e) => changeMasses(0, e)} />
                    <Card tubeNumber={"02"} percent={"1"}  changeMasses={(e) => changeMasses(1, e)} />
                    <Card tubeNumber={"03"} percent={"5"}  changeMasses={(e) => changeMasses(2, e)} />
                    <Card tubeNumber={"04"} percent={"10"} changeMasses={(e) => changeMasses(3, e)} />
                    <Card tubeNumber={"05"} percent={"15"} changeMasses={(e) => changeMasses(4, e)} />
                    <Card tubeNumber={"06"} percent={"20"} changeMasses={(e) => changeMasses(5, e)} />
                </div>
                <div className='w-1/2'>
                    <Card tubeNumber={"07"} percent={"0"}  changeMasses={(e) => changeMasses(6, e)} />
                    <Card tubeNumber={"08"} percent={"1"}  changeMasses={(e) => changeMasses(7, e)} />
                    <Card tubeNumber={"09"} percent={"5"}  changeMasses={(e) => changeMasses(8, e)} />
                    <Card tubeNumber={"10"} percent={"10"} changeMasses={(e) => changeMasses(9, e)} />
                    <Card tubeNumber={"11"} percent={"15"} changeMasses={(e) => changeMasses(10, e)} />
                    <Card tubeNumber={"12"} percent={"20"} changeMasses={(e) => changeMasses(11, e)} />
                </div> */}
            </div>

            {/* Botões de calcular e salvar no banco de dados */}

            <div>
                <button className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4' onClick={calculate}>
                    <p className='text-white font-inter font-semibold text-3xl'>Calcular</p>
                </button>
                <button className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4' onClick={save}>
                    <p className='text-white font-inter font-semibold text-3xl'>Salvar</p>
                </button>
            </div>
            <footer className='h-48' />
        </div>
    );
}

export default Register;