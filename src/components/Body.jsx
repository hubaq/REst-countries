 
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Right from './Right';
import Head from './Head';
import useFetch from './useFetch';

const Body = () => {
  const { isLoading, data, error } = useFetch('https://restcountries.com/v3.1/all');
  const [sortedData, setSortedData] = useState([]);

  // Set sortedData to the original data when it is fetched for the first time
  React.useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);

  return (
    <div className="md:w-[96%] p-4 w-full mt-28 z-50 md:rounded-md bg-dark-gray grid grid-cols-1 md:grid-cols-[300px_auto]">
      <Head data={data} setSortedData={setSortedData}/>
      <Sidebar data={data} setSortedData={setSortedData} />
      <Right data={sortedData} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Body;
