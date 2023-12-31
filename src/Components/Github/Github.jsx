import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  // Using useLoaderData
  const data = useLoaderData();

  // Uncomment this block for testing purposes with useEffect
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch data: ${response.statusText}`);
  //       }
  //       const result = await response.json();
  //       console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching GitHub data:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Sandeep9555');
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub data:', error.message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
