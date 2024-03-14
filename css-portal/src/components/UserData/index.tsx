import { Item }from '../Types';
import { useState, useEffect } from 'react';

const userData = () => {
  const [data, setUserData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/employees.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: Item[] = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default userData;

