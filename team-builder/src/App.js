import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import Team from './Team';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

//styled app

const StyledApp = styled.div`
h2{
  text-align:center;
  margin-top:8%;
  font-size:2.5rem;
  color:red;

}
`
//initial form state
const initialFormValues = {
  name: '',
  email: '',
  role: '',
  
}
function App() {
  //Team members state
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  //update the form
  const updateForm = (inputName,inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  //submit form
  const submitForm = () => {
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: uuidv4(),
    }
    setTeamMembers([...teamMembers, newTeam ])
    setFormValues(initialFormValues)
  }
  console.log(teamMembers)
  return (
    <StyledApp>
    <h2>Team Builder</h2>
    <Form values={formValues} update={updateForm} submit={submitForm}/>
    <div className='Team'>
      {teamMembers.map((friend)=>{
        return <Team key={friend.id} details={friend}/>
      })}
    </div>
    </StyledApp>
  );
}

export default App;
