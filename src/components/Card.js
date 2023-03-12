import React from 'react';


function Card(props){

    function handleChange(e){
        props.changeMasses(e.target.validity.valid ? e.target.value : e, (parseInt(props.tubeNumber)-1))
        console.log(e.target.validity.valid ? e.target.value : e)
    }
    
    function handleWheel(e){
        e.preventDefault();
    }

    return (
        <div className='border-2 border-border rounded-xl overflow-hidden w-full h-64 m-4'>
            <div className='bg-primary h-1/3 flex flex-row items-center justify-around'>
                <p className='font-inter font-semibold text-3xl text-white'>Tubo de ensaio {props.tubeNumber}</p>
                <p>imagem</p>
                <p className='font-inter font-light text-xl text-white'>{props.percent}%</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-between m-4'>
                <div className='flex flex-col justify-between items-center py-3'>
                    <p className='font-inter font-medium text-xl'>Massa atual</p>
                    <input
                        className='border-2 border-gray-500 rounded-md h-12 w-32 my-2 font-inter font-normal text-2xl'
                        type="number"
                        step={0.0001}
                        onChange={handleChange}
                        onWheel={handleWheel}
                    />
                </div>
                <div className='flex flex-col justify-between items-center py-3'>
                    <p className='font-inter font-medium text-xl'>Taxa de corrosão</p>
                    <p className='font-inter font-light text-xl'>{props.corrosionRate ? props.corrosionRate.toFixed(2) : "--" }</p>
                </div>
                <div className='flex flex-col justify-between items-center py-3'>
                    <p className='font-inter font-medium text-xl'>Eficiência</p>
                    <p className='font-inter font-light text-xl'>{props.efficiency ? props.efficiency.toFixed(2) + " %" : "--" }</p>
                </div>                
            </div>
        </div>
    );
}

export default Card;