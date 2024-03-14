// Table.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Employee {
  portrait: string;
  name: {
    first: string;
    last: string;
  };
  employeeID: string;
  email: string;
  department: string;
}

interface TableProps {
  data: Employee[];
}

const userTable = ({ data }: TableProps) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>EMPLOYEE NAME</th>
          <th>EMPLOYEE ID</th>
          <th>EMAIL</th>
          <th>DEPARTMENT</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><img className='profilePic' src={`/portraits/${item.portrait}`}  alt="Employee Pic"></img></td>
            <td>{item.name.first}&nbsp;{item.name.last}</td>
            <td>{item.employeeID}</td>
            <td>{item.email}</td>
            <td>{item.department}</td>
            <td><Link className='btn-view' to={`/${item.employeeID}`}>View details</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default userTable;
