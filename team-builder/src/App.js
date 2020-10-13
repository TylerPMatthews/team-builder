import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import axios from "axios";


const initialFormValues = {
  //Text imputs
  username: "",
  firstName: "",
  lastName: "",
  //drop down
  college: "",
  currentGPA: "",
};

function App() {
  //state that holds team members
  const [teamMembers, setTeamMembers] = useState([]);
  //State to hold all values of the form
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    let newTeamMember = {
      username: formValues.username.trim(),
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      college: formValues.college,
      gpa: formValues.gpa,
    };
    if (
      !newTeamMember.username ||
      !newTeamMember.firstName ||
      !newTeamMember.lastName ||
      !newTeamMember.college ||
      !newTeamMember.gpa
    )
      return;
    axios.post("fakeapi.com", newTeamMember)
      .then((res) => {
      setTeamMembers([...teamMembers, res.data]);
      setFormValues(initialFormValues);
    })
    .catch((err)=>{
      console.log('error')
    })
  };

  return (
    <div className="container">
      <h1>Here is my Team Builder</h1>

      <Form values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
