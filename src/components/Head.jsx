/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import searchCountries from './search';

const Head = ({data,setSortedData}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    let sortedData = Array.isArray(data) ? [...data] : []; 


    if (name) {
      sortedData = searchCountries(sortedData,name)
    }

    setSortedData(sortedData)
  }, [data,name,setSortedData]);

  function handleChange(e) {
    setName(e.target.value)
  }
  return (
    <div className="flex items-center gap-3 px-3  justify-between h-14 md:col-span-2 text-0.875rem">
      <div className="num__countries text-steel-gray">Found {data?data.length:0} countries</div>
      <div className="flex items-center justify-center gap-2 py-2 rounded-md w-96 bg-charcoal">
        <img src="Search.svg" alt="" />
        <input value={name} onChange={(e)=>handleChange(e)} className='bg-transparent border-0 outline-none w-72 text-steel-gray' placeholder='Search by Name, Region and Subregion' type="text" name="search" id="search" />
      </div>
      </div>
  );
};

export default Head;