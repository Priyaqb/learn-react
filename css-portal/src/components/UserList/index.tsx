import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userData from '../UserData';
import Table from '../UserTable'
import './index.css';

function userList() {
  const data = userData();
  const columns = ['EMPLOYEE NAME', 'EMPLOYEE ID', 'EMAIL', 'DEPARTMENT', 'ACTION'];

  return (
    <section>
      <h2>CSS Team</h2>
      <Table data={data} />
    </section>

  )
}

export default userList
