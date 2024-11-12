 
 
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import formatNumber from './formatNumber';




const Country = () => {
  const { id } = useParams();

  console.log(id);
  const { data, isLoading, error } = useFetch(`https://restcountries.com/v3.1/alpha/${id}`);
  console.log(data);
   
  // State to hold neighboring countries' data
  const [neighborData, setNeighborData] = useState([]);

  useEffect(() => {
    // Get the list of neighboring countries' codes from the data
    const neighbors = data?.[0]?.borders || [];
    
    // Fetch each neighboring country’s data if neighbors are available
    if (neighbors.length > 0) {
      Promise.all(
        neighbors.map(border => 
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then(res => res.json())
        )
      )
      .then(results => {
        // Flatten the array (in case each fetch returns an array) and store it in state
        setNeighborData(results.map(res => res[0])); // Assuming each API call returns an array with one item
      })
      .catch(error => console.error("Error fetching neighboring countries:", error));
    }
  }, [data]);

   
  return (
    <div className="md:w-[96%] p-4 w-full mt-32 z-50 md:rounded-md bg-dark-gray h-[1000px] absolute flex justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="bg-dark-gray shadow-sm sm:rounded-lg shadow-steel-gray w-[32rem] h-[52rem] absolute top-[-2rem]">
          <img className='w-52 h-40 object-cover rounded-xl mx-auto mt-[-2rem]' src={data[0]?.flags?.png} alt={`${data[0]?.name?.common} flag`} />
          <div className="flex justify-center items-center flex-col gap-2 mt-5 text-light-gray">
            <p className='text-1rem'>{data[0]?.name?.common }</p>
            <p>{data[0]?.name.official }</p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="flex bg-charcoal gap-5 p-2 rounded-md text-light-gray">
              <p className="pr-4 border-r-2 border-dark-gray">Population</p>
              <p>{formatNumber(data[0]?.population)} </p>
            </div>
             <div className="flex bg-charcoal gap-5 p-2 rounded-md text-light-gray">
              <p className="pr-4 border-r-2 border-dark-gray">Area (km²)</p>
              <p>{formatNumber(data[0]?.area)} </p>
            </div>
          </div>
          <div className="flex flex-col  border-t border-steel-gray mt-3">
            <div className="flex w-full items-center px-2 justify-between py-3 text-0.875rem text-light-gray border-b border-steel-gray">
              <p className="text-steel-gray text-0.75rem">Capital</p>
              <p>{data[0]?.capital }</p>
            </div>
            <div className="flex w-full items-center px-2 justify-between py-3 text-0.875rem text-light-gray border-b border-steel-gray">
              <p className="text-steel-gray text-0.75rem">Subregion</p>
              <p> {data[0]?.subregion}</p>
            </div>
            <div className="flex w-full items-center px-2 justify-between py-3 text-0.875rem text-light-gray border-b border-steel-gray">
              <p className="text-steel-gray text-0.75rem">Language</p>
              <p>{`${Object.values(data[0]?.languages).join(", ")}`}</p>
            </div>
            <div className="flex w-full items-center px-2 justify-between py-3 3text-0.875rem text-light-gray border-b border-steel-gray">
              <p className="text-steel-gray text-0.75rem">Currencies</p>
              <p>{`${Object.values(data[0]?.currencies)[0]?.name}`}</p>
            </div>
            <div className="flex w-full items-center px-2 justify-between py-3  text-0.875rem text-light-gray border-b border-steel-gray">
              <p className="text-steel-gray text-0.75rem">Continent</p>
              <p>{data[0]?.continents[0] }</p>
            </div>
          </div>
          <p className='text-0.75rem text-steel-gray p-3'>Neighboring Countries </p>
           <ul className='flex flex-wrap items-center gap-2 px-2'>
            {neighborData.map((neighbor, index) => (
              <li className='flex flex-col items-center justify-center mt-3 gap-2' key={index}>
           
                <img className='w-16 object-cover rounded-md h-10' src={neighbor?.flags?.png} alt={`${neighbor?.name?.common} flag`} width="50" />
                     <p className='text-light-gray text-0.875rem'>{neighbor?.name?.common}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Country;
