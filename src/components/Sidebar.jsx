/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import sortCountries from './sort';

const Sidebar = ({ data, setSortedData }) => {
  const [sortCriteria, setSortCriteria] = useState('');
  const [independent, setIndependent] = useState(false);
  const [unMember, setUnMember] = useState(false);
  const [region, setRegion] = useState(''); // New state for region

  // Function to handle sorting whenever criteria change
  useEffect(() => {
  let sortedData = Array.isArray(data) ? [...data] : []; // Ensure data is an array

  if (sortCriteria) {
    sortedData = sortCountries(sortedData, sortCriteria);
  }

  // Filter by UN member status, independence, and region if selected
  if (unMember) {
    sortedData = sortedData.filter((country) => country.unMember);
  }

  if (independent) {
    sortedData = sortedData.filter((country) => country.independent);
  }

  if (region) {
    sortedData = sortedData.filter((country) => country.region === region);
  }

  setSortedData(sortedData);
}, [sortCriteria, unMember, independent, region, data, setSortedData]);


  return (
    <div className="flex flex-col gap-4 px-3">
      {/* Sort By Dropdown */}
      <div className="flex flex-col gap-2">
        <p className="text-steel-gray text-0.875rem">Sort by</p>
        <select
          className="w-full px-2 py-2 bg-transparent border rounded-md outline-none border-steel-gray text-light-gray"
          name="sort"
          id="sort"
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option className="bg-charcoal" value="">Select Criteria</option>
          <option className="bg-charcoal" value="population">Population</option>
          <option className="bg-charcoal" value="name">Name</option>
          <option className="bg-charcoal" value="area">Area</option>
          <option className="bg-charcoal" value="region">Region</option>
        </select>
      </div>

      {/* Region Filter */}
      <div className="flex flex-col gap-2">
        <p className="text-steel-gray text-0.875rem">Region</p>
        <div className="flex flex-wrap items-center gap-2">
          <button 
            className={`text-steel-gray ${region === 'Americas' ? 'font-bold' : ''}`}
            onClick={() => setRegion(region === 'Americas' ? '' : 'Americas')}
          >
            Americas
          </button>
          <button 
            className={`text-steel-gray ${region === 'Antarctic' ? 'font-bold' : ''}`}
            onClick={() => setRegion(region === 'Antarctic' ? '' : 'Antarctic')}
          >
            Antarctic
          </button>
          <button 
            className={`text-steel-gray ${region === 'Africa' ? 'font-bold' : ''}`}
            onClick={() => setRegion(region === 'Africa' ? '' : 'Africa')}
          >
            Africa
          </button>
          <button 
            className={`text-steel-gray ${region === 'Asia' ? 'font-bold' : ''}`}
            onClick={() => setRegion(region === 'Asia' ? '' : 'Asia')}
          >
            Asia
          </button>
          <button 
            className={`text-steel-gray ${region === 'Europe' ? 'font-bold' : ''}`}
            onClick={() => setRegion(region === 'Europe' ? '' : 'Europe')}
          >
            Europe
          </button>
          <button 
            className={`text-steel-gray ${region === 'Oceania' ? 'font-bold' : ''}`}
            onClick={() => setRegion(region === 'Oceania' ? '' : 'Oceania')}
          >
            Oceania
          </button>
        </div>
      </div>

      {/* Status Filters */}
      <div className="flex flex-col gap-2">
        <p className="text-steel-gray text-0.875rem">Status</p>
        <span className="flex items-center gap-4">
          <input
            type="checkbox"
            name="un"
            id="un"
            checked={unMember}
            onChange={() => setUnMember(!unMember)}
            className=""
          />
          <p className="text-light-gray text-0.875rem">Member of the United Nations</p>
        </span>
        <span className="flex items-center gap-4">
          <input
            type="checkbox"
            name="independent"
            id="independent"
            checked={independent}
            onChange={() => setIndependent(!independent)}
          />
          <p className="text-light-gray text-0.875rem">Independent</p>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
