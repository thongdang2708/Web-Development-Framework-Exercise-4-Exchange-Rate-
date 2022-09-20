import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import RateContext from '../context/RateContext';
import { useEffect } from 'react';
function Form() {

    let [euro, setEuro] = useState(0);
    let [gbp, setGBP] = useState(0);
    let [limit, setLimit] = useState(0);

    let {rate, fetchRate} = useContext(RateContext);

    //Set effect
    useEffect(() => {
        fetchRate();
    },[]);
   
    //Handle Change Euro

    const handleChangeEuro = (e) => {
        setEuro(e.target.value);
    }

    //Handle Change GBP

    const handleChangeGBP = (e) => {
        setGBP(e.target.value);
    }
    
    //Handle Submit 

    const handleSubmit = (e) => {
        e.preventDefault();

        let numberRate = rate["GBP"];

        setLimit(numberRate);

        setGBP((numberRate*euro).toFixed(2));


    }

    

  return (
    <div className='container mx-auto mt-5'>
        <h1 className='mt-5 mb-10 text-black font-bold text-3xl'> Exchange Rate Calculator </h1>

        <form onSubmit={handleSubmit}>
            <div className='form-group flex flex-col mb-5'>
                <label htmlFor="euro" className='text-black font-bold mb-5'> EURO: </label>
                <div>
                <input type="number" step="0.01" name="euro" id="euro" value={euro} className='input input-lg bg-gray-500 focus:outline-0 text-white w-full' onChange={handleChangeEuro}/>
                <label className='text-black font-bold'> 1 euro = {limit} gbp </label>
                </div>
            </div>

            <div className='form-group flex flex-col mb-5'>
                <label htmlFor="GBP" className='text-black font-bold'> GBP: </label>
                <input type="number" name="GBP" id="GBP" value={gbp} className='input input-lg bg-gray-500 focus:outline-0 text-white' onChange={handleChangeGBP} readOnly/>
            </div>

            <button type="submit" className='btn btn-lg bg-sky-500 focus:outline-0 '> Calculate </button>
        </form>
    </div>
  )
}

export default Form