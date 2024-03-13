import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserData from '../UserData';
import './index.css';

function UserList() {
  const userData = UserData();

  return (
    <section>
      <h2>CSS Team</h2>
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
          {userData.map(item => (
            <tr>
              <td><img className='profilePic' src={`/portraits/` + item.portrait}  alt="Employee Pic"></img></td>
              <td>{item.name.first}&nbsp;{item.name.last}</td>
              <td>{item.employeeID}</td>
              <td>{item.email}</td>
              <td>{item.department}</td>
              <td><Link className='btn-view' to={`/${item.employeeID}`}>View details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

  )
}

export default UserList
