import React, { useEffect, useState } from 'react';
import { database, ref, get } from './firebaseConfig';  // Import from the firebaseConfig.js file

const FirebaseData = () => {
  const [data, setData] = useState(null);  // State to hold fetched data
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to a path in your Firebase Realtime Database (example: "movies")
        const dbRef = ref(database, 'movies');

        // Fetch data from the reference path
        const snapshot = await get(dbRef);
        
        if (snapshot.exists()) {
          setData(snapshot.val());  // Set data to state if available
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);  // Set loading to false after the data is fetched
      }
    };

    fetchData();
  }, []);  // Empty dependency array ensures the effect runs once when the component mounts

  // Render loading or data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from Firebase Realtime Database</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FirebaseData;
