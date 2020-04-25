import React, {useState} from 'react';
import Form from './Components/Form';
import {v4 as uuid} from 'uuid';
import './App.css';

export default function App() {

  const initialTeamList = [
    { id: uuid(), firstName: 'Chris', lastName: 'Harwell' },
    { id: uuid(), firstName: 'John', lastName: 'Smith' },
  ];

  const [teamMembers, setTeamMembers] = useState(initialTeamList);
  const [newTeamList, setTeamList] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
});


const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value

    setTeamList({
        ...newTeamList,
        [inputThatChanged]: newValueForInput,
        [inputThatChanged]: newValueForInput,

    });
};

const onFormSubmit = event => {
  event.preventDefault();
  const newTeamMember = {
    id: uuid(),
    firstName: newTeamList.firstName,
    lastName: newTeamList.lastName,
    email: newTeamList.email,
    role: newTeamList.role,
  };

  setTeamMembers([...teamMembers, newTeamMember]);
};
  return (
    <div className="App">
      <Form 
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange} 
        newTeamList={newTeamList}
      />
      <h3>List of Team Members:</h3>
        {
          teamMembers.map(member => 
            
            <div 
              key={member.id}
              className='team-members'
            >
              <br/>
              First Name: {member.firstName}
              <br/>
              Last Name: {member.lastName}
              <br/>
              Email: {member.email}
              <br/>
              Role: {member.role}
              <br/>
            </div>
          )
        }
    </div>
  );
}

