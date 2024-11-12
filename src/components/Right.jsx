/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Right = ({ data, isLoading, error }) => {
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data</p>;

  return (
    <div className="w-full h-full p-4">
      {/* Header Row */}
      <div className="grid w-full grid-cols-5 gap-6 p-2 border-b border-steel-gray">
        <p className="text-steel-gray text-[0.875rem]">Flag</p>
        <p className="text-steel-gray text-[0.875rem]">Name</p>
        <p className="text-steel-gray text-[0.875rem]">Population</p>
        <p className="text-steel-gray text-[0.875rem]">Area (km²)</p>
        <p className="text-steel-gray text-[0.875rem]">Region</p>
      </div>

      {/* Data Rows */}
      {data && data.length > 0 ? (
        data.map((item) => (
      <Link to={`/${item.cca3}`} key={item.cca3}>
          <div className="grid items-center w-full grid-cols-5 gap-6 p-2 border-b border-steel-gray">
            <img src={item.flags.png} alt={`${item.name.common} flag`} className="h-10 rounded-md w-14" />
            <p className="text-light-gray text-[0.875rem]">{item.name.common}</p>
            <p className="text-light-gray text-[0.875rem]">{item.population.toLocaleString()}</p>
            <p className="text-light-gray text-[0.875rem]">{item.area ? item.area.toLocaleString() : 'N/A'}</p>
            <p className="text-light-gray text-[0.875rem]">{item.region}</p>
          </div>
          </Link>
        ))
      ) : (
        // Placeholder skeleton rows if data is still loading
        <div className="grid items-center w-full grid-cols-5 gap-6 pt-2">
          <p className="text-steel-gray text-[0.875rem] w-16 h-10 rounded-md bg-charcoal"></p>
          <p className="text-light-gray bg-charcoal w-24 h-3 rounded-xl text-[0.875rem]"></p>
          <p className="text-light-gray bg-charcoal w-24 h-3 rounded-xl text-[0.875rem]"></p>
          <p className="text-light-gray bg-charcoal w-24 h-3 rounded-xl text-[0.875rem]"></p>
          <p className="text-light-gray bg-charcoal w-24 h-3 rounded-xl text-[0.875rem]"></p>
        </div>
      )}
    </div>
  );
};

export default Right;
