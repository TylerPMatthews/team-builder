import React from "react";
import styled from 'styled-components'


const StyledForm = styled.div`

div{
    background-color:white;;
    color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

}
input{
    border-radius:15px;
    text-align:center;
    outline:none;
}
select{
    border-radius:15px;
    text-align:center;
    outline:none;
}
label{
    margin:2% 0;
    
  

}


button{
    width:7rem;
    border-radius:15px;

    &:hover{
        transform: scale(1.5);
        transition:transform 0.5s;
      }
      transition:transform 0.5s;

}
`


function Form(props) {
  //Exact props Form needs
  const { values, update, submit } = props;
  
      const onChange = evt => {
      const {name,value} = evt.target
      update(name,value);
  };
  //this handles the submit
  const onSubmit = evt => {
      //this keeps the submit from updating
    evt.preventDefault()
      submit()
  }

  return (
    <StyledForm className="form container" onSubmit={onSubmit}>
      <div className="form-div inputs">
        <label>
          Username
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
            placeholder="Username"
            maxLength="15"
          ></input>
        </label>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            placeholder="First Name"
            maxLength="12"
          ></input>
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            placeholder="last name"
            maxLength="15"
          ></input>
        </label>
        <label>
          College
          <select name="college" value={values.college} onChange={onChange}>
            <option value="">---Select College---</option>
            <option value="lambdaSchool">Lambda School</option>
            <option value="ohioState">Ohio State University</option>
            <option value="usc">University of Sothern California</option>
            <option value="pennState">Penn State University</option>
          </select>
        </label>
        <label>
          Current GPA
          <select name="gpa" value={values.gpa} onChange={onChange}>
            <option value="">---Select GPA---</option>
            <option value="gpa4">4.0</option>
            <option value="gpa3">3.0 or higher</option>
            <option value="Gpa2">2.0 or higher</option>
            <option value="Gpa1">less than 2.0</option>
          </select>
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </StyledForm>
  );
}
export default Form;
