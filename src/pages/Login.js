import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SHA256 } from 'crypto-js';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


function Login(){

    const [authToken, setAuthToken] = useState();

    //const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    async function getAuthCode(){
        
        const docRef = doc(db, "Auth", process.env.REACT_APP_AUTH_DOC)

        const docData = await getDoc(docRef);
        const fieldValue = docData.data().id;
        setAuthToken(fieldValue);
        //console.log(fieldValue);

    }

    // function changeName(e){
    //     setUserName(e.target.validity.valid ? e.target.value : e)
    // }

    function changePassword(e){
        setPassword(e.target.validity.valid ? e.target.value : e)
    }

    function verifyLogin(){
        if(SHA256(password).toString() === authToken){
            alert("Autenticado!")
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/home')
        } else{
            alert("Não autenticado!")
            localStorage.setItem('isAuthenticated', 'false')
        }
    }

    useEffect(() => {
        getAuthCode();
        localStorage.removeItem("isAuthenticated");
    }, [])

    return (
        <div className='bg-background w-full min-h-screen flex items-center flex-col'>
            <div className='bg-primary w-full h-24 flex justify-center items-center flex-row p-8'>
                <div className='flex justify-center w-full'>
                    <h1 className='text-white font-inter font-bold text-4xl'>Login</h1>     
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='border-2 border-border rounded-xl overflow-hidden w-96 h-96 m-4 flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-center flex-col m-4'>
                        {/* <p className='font-inter font-medium text-xl'>Digite seu nome:</p>
                        <input
                            className='border-2 border-gray-500 rounded-md h-12 w-64 my-2 font-inter font-normal text-2xl'
                            onChange={changeName}
                        /> */}
                        <p className='font-inter font-medium text-xl'>Digite o código de acesso:</p>
                        <input
                            className='border-2 border-gray-500 rounded-md h-12 w-80 my-2 font-inter font-normal text-2xl'
                            type='password'
                            onChange={changePassword}
                        />
                    </div>
                    <button
                        className='bg-primary hover:bg-primary/90 w-80 h-16 flex justify-center items-center rounded-2xl m-4 text-white font-inter font-semibold text-3xl'
                        onClick={verifyLogin}
                    >
                        Entrar
                    </button>             

                </div>
            </div>
        </div>
    );
}

export default Login;