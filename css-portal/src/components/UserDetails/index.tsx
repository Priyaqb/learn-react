import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserData from '../UserData';
import Slider from 'rc-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import 'rc-slider/assets/index.css';
import './index.css'

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

interface UserObj {
  name: Name;
  userId: string;
  employeeID: string;
  designation: string;
  grade: string;
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
  skills: string[];
}

const UserDetails = () => {
  const userInfo = UserData() as UserObj[]; // Type assertion
  const { id } = useParams<{ id: string }>();

  const [userBio, setuserBio] = useState<UserObj | null>(null); // Set initial value to null
  const [allocation, setallocation] = useState(0);

  let allocationVal = 0;

  useEffect(() => {
    const filteredUser = userInfo.find(user => user.employeeID === id);
    if (filteredUser) {
      setuserBio(filteredUser);
      {filteredUser.projects.map(project => (
        allocationVal += project.allocationPercentage
      ))}
      setallocation(allocationVal);
    }
    
  }, [id, userInfo]);

  return (
    <section className="user-card">
      <Link className='btn-view btn-back' to={`/`}>Back</Link>

      {userBio ? (
        <>
            <div className='col-left'>
                <img className="displayPic" src={`/portraits/` + userBio.portrait}  alt="ProfilePic" />
                
                <h2 className="m-b-8">{userBio.name.first} {userBio.name.last}</h2>
                <div>
                    <p>{userBio.designation}</p>
                    <p className='icon-wrapper'>
                        <a href={`mailto:` + userBio.email}><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href={`tel:` + userBio.phone}><FontAwesomeIcon icon={faPhone} /></a>
                    </p>
                </div>
            </div>
            <div className='col-right'>
                <span className='separator'></span>
                <h3>Allocation</h3>
                <Slider 
                    pushable = {false}
                    draggableTrack = {false}
                    value = {allocation}
                    min={0}
                    max={100}
                    step={10}
                    marks={{
                        0: 0,
                        100: 100
                    }}
                />
                <h3>Projects</h3>
                <ul>
                    {userBio.projects.map(project => (
                        <li>
                            <span>{project.name} &nbsp; - &nbsp;</span>
                            <span><b>{project.allocationPercentage}%</b></span>
                        </li>
                    ))}
                </ul>
                <h3>Skills</h3>
                <p className='skill-wrapper'>
                    {userBio.skills.map(skill => (
                        <span>{skill}</span>
                    ))}
                </p>
            </div>
        </>
      ) : (
        <p>No user found with the specified employee ID.</p>
      )}
    </section>
  );
};

export default UserDetails;


