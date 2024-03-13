import { useState, useEffect } from 'react';

interface Name {
    first: string;
    last: string;
  }
  interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  interface Projects {
    projectId: string;
    name: string;
    allocationPercentage: number;
  }
  
  interface Item {
    name: Name;
    userId: string;
    employeeID: string;
    designation: string;
    stream: string;
    dob: string;
    hiredOn: string;
    email: string;
    phone: string;
    address: Address;
    projects: Projects[];
    department: string;
    gender: string;
    portrait: string;
    virtualTeam: string;
    grade: string;
    skills: string[]
  }

const UserData = () => {
  const [userData, setUserData] = useState<Item[]>([]);

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

  return userData;
};

export default UserData;

